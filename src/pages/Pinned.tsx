import { Eye, PinIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { useTasks } from '../context/useTasks'

function Pinned() {
  const navigate = useNavigate()

  const { tasks } = useTasks()

  const pinnedTasks = tasks.filter(
    (task) => task.isPinned,
  )

  return (
    <div className="min-h-full bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
              <PinIcon
                size={22}
                fill="currentColor"
              />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Pinned
              </h1>

              <p className="mt-1 text-slate-500">
                Your pinned tasks
              </p>
            </div>
          </div>
        </div>

        {pinnedTasks.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <PinIcon
              size={40}
              className="mx-auto mb-4 text-slate-300"
            />

            <h2 className="text-xl font-semibold text-slate-800">
              No pinned tasks yet
            </h2>

            <p className="mt-2 text-slate-500">
              Pin tasks and they will appear here.
            </p>

            <button
              type="button"
              onClick={() => navigate('/tasks')}
              className="mt-5 rounded-xl bg-indigo-600 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-700"
            >
              Browse Tasks
            </button>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pinnedTasks.map((task) => (
              <div
                key={task.id}
                className="rounded-xl border border-indigo-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h2 className="min-w-0 text-xl font-semibold text-slate-900">
                    {task.title}
                  </h2>

                  <PinIcon
                    size={20}
                    className="shrink-0 text-indigo-500"
                    fill="currentColor"
                  />
                </div>

                <p className="mb-4 text-slate-600">
                  {task.description}
                </p>

                <div className="space-y-2 text-sm text-slate-700">
                  <p>
                    <strong>Category:</strong>{' '}
                    {task.category}
                  </p>

                  <div className="flex items-center gap-2">
                    <strong>Priority:</strong>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        task.priority === 'High'
                          ? 'bg-red-100 text-red-700'
                          : task.priority === 'Medium'
                            ? 'bg-orange-100 text-orange-700'
                            : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {task.priority}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <strong>Status:</strong>

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
                  </div>

                  <p>
                    <strong>Due Date:</strong>{' '}
                    {task.dueDate}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    navigate(`/tasks/${task.id}`)
                  }
                  className="mt-5 inline-flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-100"
                >
                  <Eye size={16} />
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Pinned
