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
        <h2 className="mb-4 text-2xl font-semibold">
          {task.title}
        </h2>

        <div className="space-y-5">
          <div>
            <h3 className="mb-1 font-semibold">
              Description
            </h3>

            <p className="text-gray-600">
              {task.description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold">
                Category
              </h3>

              <p className="text-gray-600">
                {task.category}
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Priority
              </h3>

              <p className="text-gray-600">
                {task.priority}
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Status
              </h3>

              <p className="text-gray-600">
                {task.status}
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Due Date
              </h3>

              <p className="text-gray-600">
                {task.dueDate}
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Created At
              </h3>

              <p className="text-gray-600">
                {new Date(
                  task.createdAt,
                ).toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
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