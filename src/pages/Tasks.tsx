import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useTasks } from '../context/useTasks'

import type {
  TaskPriority,
  TaskStatus,
} from '../types/task'

function Tasks() {
  const navigate = useNavigate()

  const {
    tasks,
    loading,
    error,
    deleteTask,
  } = useTasks()

  const [searchTerm, setSearchTerm] = useState('')

  const [statusFilter, setStatusFilter] =
    useState<TaskStatus | ''>('')

  const [priorityFilter, setPriorityFilter] =
    useState<TaskPriority | ''>('')

  const filteredTasks = useMemo(() => {
    const search = searchTerm
      .trim()
      .toLowerCase()

    return tasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(search) ||
        task.description
          .toLowerCase()
          .includes(search)

      const matchesStatus =
        !statusFilter ||
        task.status === statusFilter

      const matchesPriority =
        !priorityFilter ||
        task.priority === priorityFilter

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority
      )
    })
  }, [
    tasks,
    searchTerm,
    statusFilter,
    priorityFilter,
  ])

  const handleDelete = (id: string) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this task?',
    )

    if (confirmed) {
      deleteTask(id)
    }
  }

  const handleClearFilters = () => {
    setSearchTerm('')
    setStatusFilter('')
    setPriorityFilter('')
  }

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

  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Tasks
      </h1>

      <div className="mb-6 rounded-xl border bg-white p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Search Tasks
            </label>

            <input
              type="text"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              placeholder="Search by title or description..."
              className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Status
            </label>

            <select
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(
                  event.target.value as
                    | TaskStatus
                    | '',
                )
              }
              className="w-full rounded-lg border px-4 py-2"
            >
              <option value="">All statuses</option>
              <option value="Todo">Todo</option>
              <option value="In Progress">
                In Progress
              </option>
              <option value="Completed">
                Completed
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Priority
            </label>

            <select
              value={priorityFilter}
              onChange={(event) =>
                setPriorityFilter(
                  event.target.value as
                    | TaskPriority
                    | '',
                )
              }
              className="w-full rounded-lg border px-4 py-2"
            >
              <option value="">
                All priorities
              </option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing {filteredTasks.length} of{' '}
            {tasks.length} tasks
          </p>

          <button
            type="button"
            onClick={handleClearFilters}
            className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {filteredTasks.length === 0 ? (
        <div className="rounded-xl border bg-white p-8 text-center shadow-sm">
          <p className="text-gray-600">
            No tasks match your search or filters.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredTasks.map((task) => (
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

              <div className="mt-5 flex flex-wrap gap-2">
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
                    navigate(
                      `/tasks/${task.id}/edit`,
                    )
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