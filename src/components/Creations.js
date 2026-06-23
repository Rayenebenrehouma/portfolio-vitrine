'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Restaurant le Sud',
    type: 'Site vitrine',
    color: '#D4C4A8',
  },
  {
    title: 'Artisan Dupont',
    type: 'Site vitrine',
    color: '#1A1A1A',
  },
  {
    title: 'Coach Emma',
    type: 'Portfolio',
    color: '#EDE6D6',
  },
  {
    title: 'Salon Lumière',
    type: 'Site vitrine',
    color: '#C8B89A',
  },
  {
    title: 'Photographe Marc',
    type: 'Portfolio',
    color: '#8A8278',
  },
  {
    title: 'Cabinet RH',
    type: 'Site vitrine',
    color: '#F0EDE6',
  },
]

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Creations() {
  return (
    <section id="creations" className="bg-[#F5F0E8] py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-8 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={headerVariants}
        >
          <span
            className="inline-block rounded-full bg-[#EDE6D6] px-5 py-1.5 font-[family-name:var(--font-dm-sans)] text-[11px] font-medium text-[#6A6258]"
          >
            Mes créations
          </span>

          <h2
            className="mt-4 font-[family-name:var(--font-dm-sans)] text-[32px] font-medium text-[#1A1A1A] lg:text-[40px]"
          >
            Ce que je réalise
          </h2>
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={gridVariants}
        >
          {projects.map((project) => (
            <motion.article key={project.title} variants={cardVariants}>
              <div
                className="h-[180px] rounded-t-xl"
                style={{ backgroundColor: project.color }}
                aria-hidden="true"
              />
              <div className="pt-3">
                <h3
                  className="font-[family-name:var(--font-dm-sans)] text-sm font-medium text-[#1A1A1A]"
                >
                  {project.title}
                </h3>
                <p
                  className="mt-0.5 font-[family-name:var(--font-poppins)] text-xs text-[#8A8278]"
                >
                  {project.type}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
