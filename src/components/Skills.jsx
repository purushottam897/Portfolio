import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function Skills() {
  return (
    <section id="skills" className="bg-slate-900 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Skills" title="Technical toolkit for placement-ready development">
          A balanced mix of programming languages, data structures, databases, and modern frontend development.
        </SectionHeading>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-9">
          {skills.map(({ name, icon: Icon, logoUrl, tone }, index) => (
            <motion.div
              key={name}
              className="group rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-center shadow-lg shadow-black/15 transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-slate-950"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.035 }}
            >
              <div className={`mx-auto mb-4 grid size-14 place-items-center rounded-2xl bg-gradient-to-br ${tone} text-white shadow-lg shadow-black/20 transition duration-300 group-hover:scale-110`}>
                {logoUrl ? (
                  <span className="grid size-8 place-items-center">
                    <img
                      src={logoUrl}
                      alt=""
                      className="size-8 object-contain"
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = 'none'
                        event.currentTarget.nextElementSibling.style.display = 'block'
                      }}
                    />
                    <Icon size={24} className="hidden" />
                  </span>
                ) : (
                  <Icon size={24} />
                )}
              </div>
              <p className="text-sm font-bold text-slate-100">{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
