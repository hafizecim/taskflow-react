import { useNavigate } from 'react-router-dom'

import { useTasks } from '../context/useTasks'

function Dashboard() {
  const navigate = useNavigate()

  const {
    tasks,
    loading,
    error,
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

  if (loading && tasks.length === 0) {
    return (
      <div className="flex min-h-[500px] items-center justify-center bg-slate-50">
        <div className="rounded-2xl border bg-white px-8 py-6 shadow-sm">
          <p className="text-lg font-medium text-slate-600">
            Loading dashboard...
          </p>
        </div>
      </div>
    )
  }

  if (error && tasks.length === 0) {
    return (
      <div className="flex min-h-[500px] items-center justify-center bg-slate-50 p-6">
        <div className="max-w-md rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
          <h2 className="mb-2 text-xl font-bold text-red-700">
            Unable to load dashboard
          </h2>

          <p className="text-red-600">
            Failed to load dashboard data.
          </p>
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
    <div className="min-h-full bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-indigo-600">
              TaskFlow
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Dashboard
            </h1>

            <p className="mt-2 text-slate-500">
              Here is your task overview.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/tasks')}
            className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-md"
          >
            View All Tasks
          </button>
        </div>

        {/* Statistics */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Total */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Total Tasks
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {totalTasks}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-xl text-indigo-600">
                ✓
              </div>
            </div>
          </div>

          {/* Todo */}

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-amber-700">
                  Todo
                </p>

                <p className="mt-2 text-3xl font-bold text-amber-900">
                  {todoTasks}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-200 text-xl text-amber-800">
                ○
              </div>
            </div>
          </div>

          {/* In Progress */}

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-700">
                  In Progress
                </p>

                <p className="mt-2 text-3xl font-bold text-blue-900">
                  {inProgressTasks}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-200 text-xl text-blue-800">
                →
              </div>
            </div>
          </div>

          {/* Completed */}

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-emerald-700">
                  Completed
                </p>

                <p className="mt-2 text-3xl font-bold text-emerald-900">
                  {completedTasks}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-200 text-xl text-emerald-800">
                ✓
              </div>
            </div>
          </div>
        </div>

        {/* Recent Tasks */}

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-3 border-b border-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between">
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
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
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
                  <div className="min-w-0">
                    <h3 className="truncate font-semibold text-slate-900">
                      {task.title}
                    </h3>

                    <p className="mt-1 truncate text-sm text-slate-500">
                      {task.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
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