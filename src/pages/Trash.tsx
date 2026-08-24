import {
  Eye,
  RotateCcw,
  Trash2,
  Trash,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { useTasks } from '../context/useTasks'

function TrashPage() {
  const navigate = useNavigate()

  const {
    tasks,
    restoreTask,
    permanentDeleteTask,
  } = useTasks()

  const deletedTasks = tasks.filter(
    (task) => task.isDeleted,
  )

  const handlePermanentDelete = (id: string) => {
    const confirmed = window.confirm(
      'Are you sure you want to permanently delete this task?',
    )

    if (confirmed) {
      permanentDeleteTask(id)
    }
  }

  return (
    <div className="min-h-full bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-100 text-rose-600">
              <Trash size={22} />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Trash
              </h1>

              <p className="mt-1 text-slate-500">
                Manage your deleted tasks.
              </p>
            </div>
          </div>
        </div>

        {deletedTasks.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <Trash2
              size={42}
              className="mx-auto mb-4 text-slate-300"
            />

            <h2 className="text-xl font-semibold text-slate-800">
              Trash is empty
            </h2>

            <p className="mt-2 text-slate-500">
              Deleted tasks will appear here.
            </p>

            <button
              type="button"
              onClick={() => navigate('/tasks')}
              className="mt-5 rounded-xl bg-indigo-600 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-700"
            >
              Back to Tasks
            </button>
          </div>
        ) : (
          <>
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-medium text-slate-600">
                {deletedTasks.length}{' '}
                {deletedTasks.length === 1
                  ? 'deleted task'
                  : 'deleted tasks'}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {deletedTasks.map((task) => (
                <div
                  key={task.id}
                  className="rounded-xl border border-rose-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h2 className="min-w-0 text-xl font-semibold text-slate-900">
                      {task.title}
                    </h2>

                    <Trash2
                      size={20}
                      className="shrink-0 text-rose-400"
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

                  <div className="mt-5 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        navigate(`/tasks/${task.id}`)
                      }
                      className="inline-flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-100"
                    >
                      <Eye size={16} />
                      View
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        restoreTask(task.id)
                      }
                      className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
                    >
                      <RotateCcw size={16} />
                      Restore
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        handlePermanentDelete(task.id)
                      }
                      className="inline-flex items-center gap-2 rounded-lg border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-100"
                    >
                      <Trash2 size={16} />
                      Delete Forever
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default TrashPage