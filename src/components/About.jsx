import { motion } from 'framer-motion'
import { aboutCards } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function About() {
  return (
    <section id="about" className="bg-slate-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="About" title="A focused learner building toward software engineering">
          I combine strong fundamentals with project-based practice, turning classroom learning into polished,
          practical web and database-driven applications.
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-3">
          {aboutCards.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              key={title}
              className="rounded-3xl border border-white/10 bg-white/[0.055] p-7 shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-300/30 hover:bg-white/[0.08]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="mb-6 grid size-13 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-200">
                <Icon size={26} />
              </div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
