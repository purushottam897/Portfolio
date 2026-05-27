import { ArrowUp, Heart } from 'lucide-react'
import { socials } from '../data/portfolio'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <p className="flex items-center gap-2 text-sm text-slate-400">
          Copyright &copy; 2026 Mittireddy Purushottam Naidu. Built with{' '}
          <Heart size={15} className="text-cyan-300" /> React.
        </p>
        <div className="flex items-center gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label === 'Email' ? undefined : '_blank'}
              rel={label === 'Email' ? undefined : 'noreferrer'}
              aria-label={label}
              className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:text-cyan-200"
            >
              <Icon size={18} />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="grid size-10 place-items-center rounded-xl bg-white text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-100"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
