import useFetch from '../hooks/useFetch'
import type { Task } from '../types/task'

function Tasks() {
  const { data, loading, error, refetch } =
    useFetch<Task[]>('/tasks.json')

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-lg text-gray-600">
          Loading tasks...
        </p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
        <p className="text-red-600">
          Failed to load tasks.
        </p>

        <button
          onClick={refetch}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Tasks
      </h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((task) => (
          <div
            key={task.id}
            className="rounded-xl border bg-white p-5 shadow-sm"
          >
            <h2 className="mb-2 text-xl font-semibold">
              {task.title}
            </h2>

            <p className="mb-4 text-gray-600">
              {task.description}
            </p>

            <div className="space-y-1 text-sm">
              <p>
                <strong>Category:</strong> {task.category}
              </p>

              <p>
                <strong>Priority:</strong> {task.priority}
              </p>

              <p>
                <strong>Status:</strong> {task.status}
              </p>

              <p>
                <strong>Due Date:</strong> {task.dueDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tasks