import { motion } from 'framer-motion'

function SectionHeading({ eyebrow, title, children }) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55 }}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-base leading-7 text-slate-300">{children}</p>}
    </motion.div>
  )
}

export default SectionHeading
