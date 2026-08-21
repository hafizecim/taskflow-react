import { useNavigate } from 'react-router-dom'
import { useTasks } from '../context/useTasks'

function Tasks() {
  const navigate = useNavigate()

  const {
    tasks,
    loading,
    error,
    deleteTask,
  } = useTasks()

  if (loading && tasks.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-lg text-gray-600">
          Loading tasks...
        </p>
      </div>
    )
  }

  if (error && tasks.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
        <p className="text-red-600">
          Failed to load tasks.
        </p>
      </div>
    )
  }

  const handleDelete = (id: string) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this task?',
    )

    if (confirmed) {
      deleteTask(id)
    }
  }

  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Tasks
      </h1>

      {tasks.length === 0 ? (
        <div className="rounded-xl border bg-white p-8 text-center shadow-sm">
          <p className="text-gray-600">
            No tasks found.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task) => (
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
                  <strong>Category:</strong>{' '}
                  {task.category}
                </p>

                <p>
                  <strong>Priority:</strong>{' '}
                  {task.priority}
                </p>

                <p>
                  <strong>Status:</strong>{' '}
                  {task.status}
                </p>

                <p>
                  <strong>Due Date:</strong>{' '}
                  {task.dueDate}
                </p>
              </div>

              <div className="mt-5 flex gap-2">
                <button
                    type="button"
                    onClick={() =>
                    navigate(`/tasks/${task.id}`)
                    }
                    className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
                >
                    View Details
                </button>

                <button
                    type="button"
                    onClick={() =>
                    navigate(`/tasks/${task.id}/edit`)
                    }
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                    Edit
                </button>

                <button
                    type="button"
                    onClick={() =>
                    handleDelete(task.id)
                    }
                    className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                >
                    Delete
                </button>
                </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Tasks