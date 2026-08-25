import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useTasks } from '../context/useTasks'

function Calendar() {
  const navigate = useNavigate()
  const { tasks } = useTasks()

  const today = new Date()

  const [currentDate, setCurrentDate] = useState(
    new Date(
      today.getFullYear(),
      today.getMonth(),
      1,
    ),
  )

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const monthName = currentDate.toLocaleDateString(
    'en-US',
    {
      month: 'long',
      year: 'numeric',
    },
  )

  const daysInMonth = new Date(
    year,
    month + 1,
    0,
  ).getDate()

  const firstDayOfMonth = new Date(
    year,
    month,
    1,
  ).getDay()

  const previousMonth = () => {
    setCurrentDate(
      new Date(year, month - 1, 1),
    )
  }

  const nextMonth = () => {
    setCurrentDate(
      new Date(year, month + 1, 1),
    )
  }

  const goToToday = () => {
    setCurrentDate(
      new Date(
        today.getFullYear(),
        today.getMonth(),
        1,
      ),
    )
  }

  const calendarDays = useMemo(() => {
    const days: Array<number | null> = []

    const mondayFirstOffset =
      firstDayOfMonth === 0
        ? 6
        : firstDayOfMonth - 1

    for (let i = 0; i < mondayFirstOffset; i++) {
      days.push(null)
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }

    return days
  }, [firstDayOfMonth, daysInMonth])

  const getTasksForDay = (day: number) => {
    const date = `${year}-${String(
      month + 1,
    ).padStart(2, '0')}-${String(day).padStart(
      2,
      '0',
    )}`

    return tasks.filter(
      (task) =>
        !task.isDeleted &&
        task.dueDate.startsWith(date),
    )
  }

  const getStatusClass = (
    status: string,
  ) => {
    if (status === 'Completed') {
      return 'bg-emerald-100 text-emerald-700 border-emerald-200'
    }

    if (status === 'In Progress') {
      return 'bg-blue-100 text-blue-700 border-blue-200'
    }

    return 'bg-amber-100 text-amber-700 border-amber-200'
  }

  const isToday = (day: number) => {
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    )
  }

  return (
    <div className="min-h-full bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
              <CalendarDays size={22} />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Calendar
              </h1>

              <p className="mt-1 text-slate-500">
                View your tasks by due date.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 p-5">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previousMonth}
                className="rounded-lg border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50"
                title="Previous month"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={nextMonth}
                className="rounded-lg border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50"
                title="Next month"
              >
                <ChevronRight size={20} />
              </button>

              <h2 className="ml-2 text-xl font-bold text-slate-900">
                {monthName}
              </h2>
            </div>

            <button
              type="button"
              onClick={goToToday}
              className="rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100"
            >
              Today
            </button>
          </div>

          <div className="grid grid-cols-7 border-b border-slate-200">
            {[
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ].map((day) => (
              <div
                key={day}
                className="border-r border-slate-200 p-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-500 last:border-r-0"
              >
                {day.slice(0, 3)}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7">
            {calendarDays.map((day, index) => {
              const dayTasks = day
                ? getTasksForDay(day)
                : []

              return (
                <div
                  key={`${day}-${index}`}
                  className="min-h-32 border-b border-r border-slate-200 p-2 last:border-r-0"
                >
                  {day && (
                    <>
                      <div
                        className={`mb-2 flex h-7 w-7 items-center justify-center rounded-full text-sm font-semibold ${
                          isToday(day)
                            ? 'bg-indigo-600 text-white'
                            : 'text-slate-700'
                        }`}
                      >
                        {day}
                      </div>

                      <div className="space-y-1">
                        {dayTasks.map((task) => (
                          <button
                            key={task.id}
                            type="button"
                            onClick={() =>
                              navigate(
                                `/tasks/${task.id}`,
                              )
                            }
                            className={`w-full truncate rounded-md border px-2 py-1 text-left text-xs font-medium transition hover:opacity-80 ${getStatusClass(
                              task.status,
                            )}`}
                            title={task.title}
                          >
                            {task.title}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>

          <div className="flex flex-wrap gap-4 border-t border-slate-200 p-4">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              Todo
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="h-3 w-3 rounded-full bg-blue-400" />
              In Progress
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              Completed
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
