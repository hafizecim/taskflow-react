import {
  BarChart3,
  CalendarDays,
  CheckSquare,
  Heart,
  Info,
  Plus,
  Settings,
  Trash2,
} from 'lucide-react'

import { NavLink } from 'react-router-dom'

interface SidebarProps {
  mobileOpen?: boolean
  onMobileClose?: () => void
}

function Sidebar({
  mobileOpen = false,
  onMobileClose,
}: SidebarProps) {
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

  const handleNavigation = () => {
    onMobileClose?.()
  }

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/40 md:hidden"
          onClick={onMobileClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 border-r border-slate-200 bg-white
          transition-transform duration-300
          md:static md:block md:min-h-[calc(100vh-64px)]
          md:translate-x-0
          ${
            mobileOpen
              ? 'translate-x-0'
              : '-translate-x-full'
          }
        `}
      >
        <nav className="space-y-0 p-5 md:p-0">
          <NavLink
            to="/"
            onClick={handleNavigation}
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
            onClick={handleNavigation}
            className={getNavLinkClass}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
              <CheckSquare size={18} />
            </span>

            <span>Tasks</span>
          </NavLink>

          <NavLink
            to="/tasks/new"
            onClick={handleNavigation}
            className={getNavLinkClass}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
              <Plus size={18} />
            </span>

            <span>Add Task</span>
          </NavLink>

          <NavLink
            to="/calendar"
            onClick={handleNavigation}
            className={getNavLinkClass}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
              <CalendarDays size={18} />
            </span>

            <span>Calendar</span>
          </NavLink>

          <NavLink
            to="/reports"
            onClick={handleNavigation}
            className={getNavLinkClass}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
              <BarChart3 size={18} />
            </span>

            <span>Reports</span>
          </NavLink>

          <NavLink
            to="/favorites"
            onClick={handleNavigation}
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
            onClick={handleNavigation}
            className={getNavLinkClass}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
              <Trash2 size={18} />
            </span>

            <span>Trash</span>
          </NavLink>

          <NavLink
            to="/settings"
            onClick={handleNavigation}
            className={getNavLinkClass}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
              <Settings size={18} />
            </span>

            <span>Settings</span>
          </NavLink>

          <NavLink
            to="/about"
            onClick={handleNavigation}
            className={getNavLinkClass}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
              <Info size={18} />
            </span>

            <span>About</span>
          </NavLink>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar