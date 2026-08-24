import {
  CheckSquare,
  Heart,
  Plus,
  Trash2,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  const getNavLinkClass = ({
    isActive,
  }: {
    isActive: boolean
  }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
      isActive
        ? 'bg-indigo-600 text-white shadow-sm'
        : 'text-slate-600 hover:bg-indigo-50 hover:text-indigo-700'
    }`

  return (
    <aside className="hidden min-h-[calc(100vh-64px)] w-64 shrink-0 border-r border-slate-200 bg-white p-5 md:block">
      <div className="mb-6">
        <p className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Navigation
        </p>
      </div>

      <nav className="space-y-2">
        <NavLink
          to="/"
          className={getNavLinkClass}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
            ⌂
          </span>

          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/tasks"
          end
          className={getNavLinkClass}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
            <CheckSquare size={18} />
          </span>

          <span>Tasks</span>
        </NavLink>

        <NavLink
          to="/tasks/new"
          className={getNavLinkClass}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
            <Plus size={18} />
          </span>

          <span>Add Task</span>
        </NavLink>

        <NavLink
          to="/favorites"
          className={getNavLinkClass}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
            <Heart
              size={18}
              fill="currentColor"
            />
          </span>

          <span>Favorites</span>
        </NavLink>

        <NavLink
          to="/trash"
          className={getNavLinkClass}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
            <Trash2 size={18} />
          </span>

          <span>Trash</span>
        </NavLink>
      </nav>

      <div className="mt-8 rounded-2xl bg-slate-50 p-4">
        <p className="text-sm font-semibold text-slate-800">
          TaskFlow
        </p>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          Stay organized and keep your tasks under control.
        </p>
      </div>
    </aside>
  )
}

export default Sidebar
