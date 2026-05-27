import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/portfolio'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const publicPath = import.meta.env.BASE_URL

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3" onClick={closeMenu}>
          <span className="size-11 overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 p-0.5 shadow-lg shadow-cyan-500/20 transition-transform duration-300 group-hover:scale-105">
            <img
              src={`${publicPath}profile-photo.jpg`}
              alt="Mittireddy Purushottam Naidu"
              className="size-full rounded-[0.875rem] object-cover object-[50%_28%]"
            />
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">Mittireddy Purushottam Naidu</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 shadow-2xl shadow-black/30 md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10"
                onClick={closeMenu}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
