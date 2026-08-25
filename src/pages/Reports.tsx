import {
  CheckCircle2,
  Clock3,
  ListTodo,
  Heart,
  Pin,
  AlertTriangle,
  BarChart3,
} from 'lucide-react'

import { useMemo } from 'react'

import { useTasks } from '../context/useTasks'

function Reports() {
  const { tasks } = useTasks()

  const activeTasks = useMemo(
    () => tasks.filter((task) => !task.isDeleted),
    [tasks],
  )

  const totalTasks = activeTasks.length

  const todoTasks = activeTasks.filter(
    (task) => task.status === 'Todo',
  ).length

  const inProgressTasks = activeTasks.filter(
    (task) => task.status === 'In Progress',
  ).length

  const completedTasks = activeTasks.filter(
    (task) => task.status === 'Completed',
  ).length

  const highPriorityTasks = activeTasks.filter(
    (task) => task.priority === 'High',
  ).length

  const favoriteTasks = activeTasks.filter(
    (task) => task.isFavorite,
  ).length

  const pinnedTasks = activeTasks.filter(
    (task) => task.isPinned,
  ).length

  const overdueTasks = activeTasks.filter(
    (task) =>
      task.status !== 'Completed' &&
      new Date(task.dueDate) < new Date(),
  ).length

  const getPercentage = (value: number) => {
    if (totalTasks === 0) {
      return 0
    }

    return Math.round(
      (value / totalTasks) * 100,
    )
  }

  const statistics = [
    {
      title: 'Total Tasks',
      value: totalTasks,
      icon: ListTodo,
      className:
        'bg-indigo-100 text-indigo-600',
    },
    {
      title: 'Completed',
      value: completedTasks,
      icon: CheckCircle2,
      className:
        'bg-emerald-100 text-emerald-600',
    },
    {
      title: 'In Progress',
      value: inProgressTasks,
      icon: Clock3,
      className:
        'bg-blue-100 text-blue-600',
    },
    {
      title: 'High Priority',
      value: highPriorityTasks,
      icon: AlertTriangle,
      className:
        'bg-red-100 text-red-600',
    },
    {
      title: 'Favorites',
      value: favoriteTasks,
      icon: Heart,
      className:
        'bg-pink-100 text-pink-600',
    },
    {
      title: 'Pinned',
      value: pinnedTasks,
      icon: Pin,
      className:
        'bg-purple-100 text-purple-600',
    },
  ]

  return (
    <div className="min-h-full bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
              <BarChart3 size={22} />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Reports
              </h1>

              <p className="mt-1 text-slate-500">
                Overview and statistics of your tasks.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {statistics.map((statistic) => {
            const Icon = statistic.icon

            return (
              <div
                key={statistic.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      {statistic.title}
                    </p>

                    <p className="mt-2 text-3xl font-bold text-slate-900">
                      {statistic.value}
                    </p>
                  </div>

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${statistic.className}`}
                  >
                    <Icon size={21} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">
              Task Status
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Distribution of your active tasks.
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-amber-700">
                    Todo
                  </span>

                  <span className="font-semibold text-slate-700">
                    {todoTasks} (
                    {getPercentage(todoTasks)}%)
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-amber-400"
                    style={{
                      width: `${getPercentage(todoTasks)}%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-blue-700">
                    In Progress
                  </span>

                  <span className="font-semibold text-slate-700">
                    {inProgressTasks} (
                    {getPercentage(inProgressTasks)}%)
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-blue-500"
                    style={{
                      width: `${getPercentage(
                        inProgressTasks,
                      )}%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-emerald-700">
                    Completed
                  </span>

                  <span className="font-semibold text-slate-700">
                    {completedTasks} (
                    {getPercentage(
                      completedTasks,
                    )}
                    %)
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-emerald-500"
                    style={{
                      width: `${getPercentage(
                        completedTasks,
                      )}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">
              Priority Overview
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Distribution of task priorities.
            </p>

            <div className="mt-6 space-y-5">
              {(['High', 'Medium', 'Low'] as const).map(
                (priority) => {
                  const count =
                    activeTasks.filter(
                      (task) =>
                        task.priority === priority,
                    ).length

                  const percentage =
                    getPercentage(count)

                  const barClass =
                    priority === 'High'
                      ? 'bg-red-500'
                      : priority === 'Medium'
                        ? 'bg-orange-400'
                        : 'bg-green-500'

                  const textClass =
                    priority === 'High'
                      ? 'text-red-700'
                      : priority === 'Medium'
                        ? 'text-orange-700'
                        : 'text-green-700'

                  return (
                    <div key={priority}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span
                          className={`font-medium ${textClass}`}
                        >
                          {priority}
                        </span>

                        <span className="font-semibold text-slate-700">
                          {count} ({percentage}%)
                        </span>
                      </div>

                      <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full ${barClass}`}
                          style={{
                            width: `${percentage}%`,
                          }}
                        />
                      </div>
                    </div>
                  )
                },
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Completion Rate
            </p>

            <p className="mt-2 text-3xl font-bold text-emerald-600">
              {getPercentage(completedTasks)}%
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Percentage of completed tasks
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Overdue Tasks
            </p>

            <p className="mt-2 text-3xl font-bold text-red-600">
              {overdueTasks}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Uncompleted tasks past their due date
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Active Tasks
            </p>

            <p className="mt-2 text-3xl font-bold text-indigo-600">
              {totalTasks}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Tasks currently in your workspace
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports
