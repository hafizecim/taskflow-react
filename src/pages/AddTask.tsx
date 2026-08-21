import { useState } from 'react'
import type { SyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTasks } from '../context/useTasks'
import type {
  Task,
  TaskPriority,
  TaskStatus,
} from '../types/task'

function AddTask() {
  const navigate = useNavigate()
  const { addTask } = useTasks()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [priority, setPriority] = useState<TaskPriority | ''>('')
  const [status, setStatus] = useState<TaskStatus | ''>('')
  const [dueDate, setDueDate] = useState('')

  const [errors, setErrors] = useState<string[]>([])

  const handleSubmit = (
    event: SyntheticEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    const validationErrors: string[] = []

    if (!title.trim()) {
      validationErrors.push('Title is required.')
    }

    if (!description.trim()) {
      validationErrors.push('Description is required.')
    }

    if (!category.trim()) {
      validationErrors.push('Category is required.')
    }

    if (!priority) {
      validationErrors.push('Priority is required.')
    }

    if (!status) {
      validationErrors.push('Status is required.')
    }

    if (!dueDate) {
      validationErrors.push('Due date is required.')
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      return
    }

    if (!priority || !status) {
    return
    }

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
      category: category.trim(),
      priority,
      status,
      dueDate,
      createdAt: new Date().toISOString(),
    }

    addTask(newTask)

    navigate('/tasks')
  }

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Add New Task
      </h1>

      {errors.length > 0 && (
        <div className="mb-6 rounded-lg border border-red-300 bg-red-50 p-4">
          <p className="mb-2 font-semibold text-red-700">
            Please fix the following errors:
          </p>

          <ul className="list-disc pl-5 text-red-600">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-xl border bg-white p-6 shadow-sm"
      >
        <div>
          <label className="mb-2 block font-medium">
            Title
          </label>

          <input
            type="text"
            value={title}
            onChange={(event) =>
              setTitle(event.target.value)
            }
            className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task title"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Description
          </label>

          <textarea
            value={description}
            onChange={(event) =>
              setDescription(event.target.value)
            }
            rows={4}
            className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task description"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Category
          </label>

          <select
            value={category}
            onChange={(event) =>
              setCategory(event.target.value)
            }
            className="w-full rounded-lg border px-4 py-2"
          >
            <option value="">Select category</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Study">Study</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Priority
          </label>

          <select
            value={priority}
            onChange={(event) =>
              setPriority(
                event.target.value as TaskPriority,
              )
            }
            className="w-full rounded-lg border px-4 py-2"
          >
            <option value="">Select priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Status
          </label>

          <select
            value={status}
            onChange={(event) =>
              setStatus(
                event.target.value as TaskStatus,
              )
            }
            className="w-full rounded-lg border px-4 py-2"
          >
            <option value="">Select status</option>
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
          <label className="mb-2 block font-medium">
            Due Date
          </label>

          <input
            type="date"
            value={dueDate}
            onChange={(event) =>
              setDueDate(event.target.value)
            }
            className="w-full rounded-lg border px-4 py-2"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
          >
            Add Task
          </button>

          <button
            type="button"
            onClick={() => navigate('/tasks')}
            className="rounded-lg border px-5 py-2 font-medium hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddTask