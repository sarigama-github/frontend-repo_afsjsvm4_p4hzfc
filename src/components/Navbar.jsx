import { Menu, FlaskConical } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-md bg-emerald-500/10 grid place-items-center border border-emerald-500/40 group-hover:bg-emerald-500/20 transition-colors">
              <FlaskConical className="h-5 w-5 text-emerald-400" />
            </div>
            <div className="leading-tight">
              <p className="text-emerald-400 font-semibold tracking-wide">Isipathana College</p>
              <p className="text-xs text-emerald-300/80 uppercase tracking-wider">Science Day</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="text-emerald-100/80 hover:text-emerald-300 transition-colors">About</a>
            <a href="#highlights" className="text-emerald-100/80 hover:text-emerald-300 transition-colors">Highlights</a>
            <a href="#schedule" className="text-emerald-100/80 hover:text-emerald-300 transition-colors">Schedule</a>
            <a href="#register" className="text-emerald-100/80 hover:text-emerald-300 transition-colors">Register</a>
          </nav>

          <button className="md:hidden h-10 w-10 grid place-items-center rounded-md border border-emerald-500/30 text-emerald-300/90">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
