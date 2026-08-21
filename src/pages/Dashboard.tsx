import { useTasks } from '../context/useTasks'

function Dashboard() {
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
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-lg text-gray-600">
          Loading dashboard...
        </p>
      </div>
    )
  }

  if (error && tasks.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-red-600">
          Failed to load dashboard data.
        </p>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-600">
          Welcome to TaskFlow. Here is your task overview.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500">
            Total Tasks
          </p>

          <p className="mt-2 text-3xl font-bold">
            {totalTasks}
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500">
            Todo
          </p>

          <p className="mt-2 text-3xl font-bold">
            {todoTasks}
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500">
            In Progress
          </p>

          <p className="mt-2 text-3xl font-bold">
            {inProgressTasks}
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500">
            Completed
          </p>

          <p className="mt-2 text-3xl font-bold">
            {completedTasks}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard