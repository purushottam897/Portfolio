import { ArrowDownToLine, Mail, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { profileHighlights, socials } from '../data/portfolio'

function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden px-4 pt-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_20%,rgba(34,211,238,0.20),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(139,92,246,0.22),transparent_30%),linear-gradient(135deg,#020617_0%,#0f172a_48%,#111827_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 py-10 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
            B.Tech CSIT Student
          </p>
          <h1 className="mx-auto max-w-5xl text-4xl font-black leading-tight text-white sm:text-6xl lg:mx-0 lg:text-7xl">
            Hi, I am{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
              Mittireddy Purushottam Naidu
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 lg:mx-0">
            Computer Science and Information Technology student with knowledge of Python, SQL, data analysis, and MySQL.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 lg:mx-0">
            Interested in software development, problem solving, workflow automation, and practical data-driven projects.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="/Mittireddy_Purushottam_Naidu_Resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-cyan-500/20 transition hover:-translate-y-1 hover:shadow-violet-500/25"
            >
              <ArrowDownToLine size={18} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
            >
              <Send size={18} />
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-3 lg:justify-start">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === 'Email' ? undefined : '_blank'}
                rel={label === 'Email' ? undefined : 'noreferrer'}
                aria-label={label}
                className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/10 text-slate-200 shadow-lg shadow-black/10 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="mx-auto w-full max-w-md"
        >
          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="mx-auto aspect-square w-64 overflow-hidden rounded-full border border-white/15 bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 p-1 shadow-2xl shadow-violet-500/15 sm:w-80">
              <img
                src="/profile-photo.jpg"
                alt="Mittireddy Purushottam Naidu"
                className="size-full rounded-full object-cover object-[50%_28%]"
              />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {profileHighlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/55 p-4 text-center">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{item.label}</p>
                  <p className="mt-1 text-sm font-bold text-white">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="absolute -right-4 top-10 hidden rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-cyan-200 shadow-xl backdrop-blur sm:block">
              <Mail size={22} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
