import { Menu, X } from 'lucide-react'

interface NavbarProps {
  mobileMenuOpen: boolean
  onMobileMenuToggle: () => void
}

function Navbar({
  mobileMenuOpen,
  onMobileMenuToggle,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 px-4 py-4 backdrop-blur sm:px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onMobileMenuToggle}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 md:hidden"
            aria-label={
              mobileMenuOpen
                ? 'Close navigation'
                : 'Open navigation'
            }
          >
            {mobileMenuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white shadow-sm">
            T
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              TaskFlow
            </h1>

            <p className="hidden text-xs text-slate-500 sm:block">
              Personal Task Management
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-xs text-slate-500">
              Welcome back
            </p>

            <p className="text-sm font-semibold text-slate-800">
              Hafize
            </p>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700 sm:h-10 sm:w-10">
            H
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar