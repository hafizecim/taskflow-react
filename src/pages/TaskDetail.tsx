import { useNavigate, useParams } from 'react-router-dom'

import { useTasks } from '../context/useTasks'

function TaskDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const { tasks } = useTasks()

  const task = tasks.find(
    (currentTask) => currentTask.id === id,
  )

  if (!task) {
    return (
      <div className="mx-auto max-w-3xl p-6">
        <div className="rounded-xl border border-red-300 bg-red-50 p-6">
          <h1 className="mb-2 text-2xl font-bold text-red-700">
            Task Not Found
          </h1>

          <p className="mb-4 text-red-600">
            The task you are looking for does not exist.
          </p>

          <button
            type="button"
            onClick={() => navigate('/tasks')}
            className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
          >
            Back to Tasks
          </button>
        </div>
      </div>
    )
  }

  const priorityClass =
    task.priority === 'High'
      ? 'bg-red-100 text-red-700'
      : task.priority === 'Medium'
        ? 'bg-yellow-100 text-yellow-700'
        : 'bg-green-100 text-green-700'

  const statusClass =
    task.status === 'Completed'
      ? 'bg-green-100 text-green-700'
      : task.status === 'In Progress'
        ? 'bg-blue-100 text-blue-700'
        : 'bg-gray-100 text-gray-700'

  return (
    <div className="mx-auto max-w-3xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Task Detail
        </h1>

        <button
          type="button"
          onClick={() => navigate('/tasks')}
          className="rounded-lg border px-5 py-2 font-medium hover:bg-gray-50"
        >
          Back
        </button>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold">
            {task.title}
          </h2>

          <p className="text-gray-500">
            Task information and details
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-3">
          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${statusClass}`}
          >
            {task.status}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${priorityClass}`}
          >
            {task.priority} Priority
          </span>

          <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
            {task.category}
          </span>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-lg font-semibold">
              Description
            </h3>

            <div className="rounded-lg bg-gray-50 p-4">
              <p className="leading-7 text-gray-600">
                {task.description}
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="text-sm text-gray-500">
                Category
              </p>

              <p className="mt-1 font-semibold">
                {task.category}
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="text-sm text-gray-500">
                Priority
              </p>

              <p className="mt-1 font-semibold">
                {task.priority}
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="text-sm text-gray-500">
                Status
              </p>

              <p className="mt-1 font-semibold">
                {task.status}
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="text-sm text-gray-500">
                Due Date
              </p>

              <p className="mt-1 font-semibold">
                {task.dueDate}
              </p>
            </div>

            <div className="rounded-lg border p-4 sm:col-span-2">
              <p className="text-sm text-gray-500">
                Created At
              </p>

              <p className="mt-1 font-semibold">
                {new Date(
                  task.createdAt,
                ).toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 border-t pt-6">
          <button
            type="button"
            onClick={() =>
              navigate(`/tasks/${task.id}/edit`)
            }
            className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
          >
            Edit Task
          </button>

          <button
            type="button"
            onClick={() => navigate('/tasks')}
            className="rounded-lg border px-5 py-2 font-medium hover:bg-gray-50"
          >
            Back to Tasks
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskDetail