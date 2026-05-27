import { Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { contactItems } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-900 px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_90%_55%,rgba(139,92,246,0.18),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading eyebrow="Contact" title="Let us build something polished">
          Reach out for project collaboration, placement discussions, or software development opportunities.
        </SectionHeading>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            className="rounded-3xl border border-white/10 bg-white/[0.07] p-7 shadow-2xl shadow-black/25 backdrop-blur-xl"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="text-2xl font-bold text-white">Contact Details</h3>
            <p className="mt-3 leading-7 text-slate-300">
              Available for internships, project work, and placement-focused technical conversations.
            </p>
            <div className="mt-8 grid gap-4">
              {contactItems.map(({ label, value, href, icon: Icon }) => (
                <a key={label} href={href} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/50 p-4 transition hover:border-cyan-300/30 hover:bg-slate-950/80">
                  <span className="grid size-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                    <Icon size={22} />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-widest text-slate-500">{label}</span>
                    <span className="mt-1 block font-semibold text-slate-100">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="rounded-3xl border border-white/10 bg-white/[0.07] p-7 shadow-2xl shadow-black/25 backdrop-blur-xl"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Name
                <input className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Email
                <input type="email" className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60" placeholder="you@example.com" />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-200">
              Subject
              <input className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60" placeholder="Project or opportunity" />
            </label>
            <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-200">
              Message
              <textarea rows="6" className="resize-none rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60" placeholder="Write your message..." />
            </label>
            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-cyan-500/20 transition hover:-translate-y-1">
              Send Message
              <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
