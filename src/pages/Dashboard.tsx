import { useNavigate } from 'react-router-dom'

import { useTasks } from '../context/useTasks'

function Dashboard() {
  const navigate = useNavigate()

  const {
    tasks,
    loading,
    error,
    refetch,
  } = useTasks()

  const totalTasks = tasks.length

  const todoTasks = tasks.filter(
    (task) => task.status === 'Todo',
  ).length

  const inProgressTasks = tasks.filter(
    (task) => task.status === 'In Progress',
  ).length

  const completedTasks = tasks.filter(
    (task) => task.status === 'Completed',
  ).length

  const highPriorityTasks = tasks.filter(
    (task) => task.priority === 'High',
  ).length

  const today = new Date()
    .toLocaleDateString('en-CA')

  const overdueTasks = tasks.filter(
    (task) =>
      task.dueDate < today &&
      task.status !== 'Completed',
  ).length

  const dueTodayTasks = tasks.filter(
    (task) =>
      task.dueDate === today &&
      task.status !== 'Completed',
  ).length

  const completionRate =
    totalTasks === 0
      ? 0
      : Math.round(
          (completedTasks / totalTasks) * 100,
        )

  if (loading && tasks.length === 0) {
    return (
      <div className="flex min-h-[500px] items-center justify-center bg-slate-50 p-4">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white px-6 py-7 text-center shadow-sm">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-indigo-100 border-t-indigo-600" />

          <p className="text-lg font-medium text-slate-600">
            Loading dashboard...
          </p>

          <p className="mt-1 text-sm text-slate-400">
            Please wait while your tasks are loading.
          </p>
        </div>
      </div>
    )
  }

  if (error && tasks.length === 0) {
    return (
      <div className="flex min-h-[500px] items-center justify-center bg-slate-50 p-4">
        <div className="w-full max-w-md rounded-2xl border border-red-200 bg-red-50 p-6 text-center shadow-sm sm:p-7">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-xl text-red-600">
            !
          </div>

          <h2 className="mb-2 text-xl font-bold text-red-700">
            Unable to load dashboard
          </h2>

          <p className="mb-5 text-sm leading-6 text-red-600">
            We could not load your task data.
            Please try again.
          </p>

          <button
            type="button"
            onClick={refetch}
            className="w-full rounded-xl bg-indigo-600 px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-md sm:w-auto"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  const recentTasks = [...tasks]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime(),
    )
    .slice(0, 5)

  return (
    <div className="min-h-full bg-slate-50 p-4 sm:p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-indigo-600">
              TaskFlow
            </p>

            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Dashboard
            </h1>

            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              Here is your task overview.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/tasks')}
            className="w-full rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-md sm:w-auto"
          >
            View All Tasks
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-6">
            <p className="text-sm font-medium text-emerald-500">
              Total Tasks
            </p>

            <p className="mt-2 text-3xl font-bold text-emerald-900">
              {totalTasks}
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-6">
            <p className="text-sm font-medium text-amber-700">
              Todo
            </p>

            <p className="mt-2 text-3xl font-bold text-amber-900">
              {todoTasks}
            </p>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-6">
            <p className="text-sm font-medium text-blue-700">
              In Progress
            </p>

            <p className="mt-2 text-3xl font-bold text-blue-900">
              {inProgressTasks}
            </p>
          </div>

          <div className="rounded-2xl border border-pink-200 bg-pink-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-6">
            <p className="text-sm font-medium text-pink-700">
              Completed
            </p>

            <p className="mt-2 text-3xl font-bold text-pink-900">
              {completedTasks}
            </p>
          </div>

          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-6">
            <p className="text-sm font-medium text-rose-700">
              Completion Rate
            </p>

            <p className="mt-2 text-3xl font-bold text-rose-900">
              {completionRate}%
            </p>
          </div>

          <div className="rounded-2xl border border-green-200 bg-green-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-6">
            <p className="text-sm font-medium text-green-700">
              High Priority
            </p>

            <p className="mt-2 text-3xl font-bold text-green-900">
              {highPriorityTasks}
            </p>
          </div>

          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-6">
            <p className="text-sm font-medium text-orange-700">
              Overdue
            </p>

            <p className="mt-2 text-3xl font-bold text-orange-900">
              {overdueTasks}
            </p>
          </div>

          <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-6">
            <p className="text-sm font-medium text-violet-700">
              Due Today
            </p>

            <p className="mt-2 text-3xl font-bold text-violet-900">
              {dueTodayTasks}
            </p>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:mt-8">
          <div className="flex flex-col gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Recent Tasks
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your latest tasks
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate('/tasks')}
              className="self-start text-sm font-semibold text-indigo-600 hover:text-indigo-700 sm:self-auto"
            >
              View all →
            </button>
          </div>

          {recentTasks.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-slate-500">
                No tasks available.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {recentTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex flex-col gap-4 p-5 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-semibold text-slate-900">
                      {task.title}
                    </h3>

                    <p className="mt-1 truncate text-sm text-slate-500">
                      {task.description}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        task.status === 'Completed'
                          ? 'bg-emerald-100 text-emerald-700'
                          : task.status ===
                              'In Progress'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {task.status}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        navigate(
                          `/tasks/${task.id}`,
                        )
                      }
                      className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
                    >
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard