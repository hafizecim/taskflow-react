import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-64 border-r border-gray-200 bg-white p-6 md:block">
      <nav className="space-y-2">
        <NavLink
          to="/"
          className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/tasks"
          className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Tasks
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar