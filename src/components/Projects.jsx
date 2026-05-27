import { ArrowUpRight, Code2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { projects } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function Projects() {
  return (
    <section id="projects" className="bg-slate-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Projects" title="Practical projects with real student use cases">
          These project concepts demonstrate problem solving across transportation, placement preparation, and
          academic management workflows.
        </SectionHeading>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map(({ title, description, stack, icon: Icon, codeUrl, githubUrl }, index) => (
            <motion.article
              key={title}
              className="group flex min-h-[360px] flex-col rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-violet-300/30 hover:bg-white/[0.08]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.52, delay: index * 0.08 }}
            >
              <div className="mb-7 grid h-40 place-items-center rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.18),rgba(59,130,246,0.12),rgba(139,92,246,0.18))]">
                <Icon className="text-cyan-100 transition duration-300 group-hover:scale-110" size={54} />
              </div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-4 flex-1 leading-7 text-slate-300">{description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a href={codeUrl} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white text-sm font-bold text-slate-950 transition hover:bg-cyan-100">
                  View Link
                  <ArrowUpRight size={17} />
                </a>
                {githubUrl && (
                  <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                    GitHub
                    <Code2 size={17} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
