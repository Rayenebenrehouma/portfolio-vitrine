'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const projects = [
  { title: 'Restaurant le Sud', type: 'Site vitrine', color: '#D4C4A8' },
  { title: 'Artisan Dupont', type: 'Site vitrine', color: '#1A1A1A' },
  { title: 'Coach Emma', type: 'Portfolio', color: '#EDE6D6' },
  { title: 'Salon Lumière', type: 'Site vitrine', color: '#C8B89A' },
  { title: 'Photographe Marc', type: 'Portfolio', color: '#8A8278' },
  { title: 'Cabinet RH', type: 'Site vitrine', color: '#F0EDE6' },
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

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cursor-pointer"
    >
      <div className="relative h-[180px] rounded-xl overflow-hidden">
        
        {/* Fond coloré avec effet scale */}
        <motion.div
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
          style={{ backgroundColor: project.color }}
        />

        {/* Overlay au hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-[#1A1A1A]/70 flex flex-col items-center justify-center gap-3 z-10"
        >
          <motion.span
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="text-[#FFFFFF] font-[family-name:var(--font-dm-sans)] text-lg font-medium"
          >
            {project.title}
          </motion.span>
          <motion.span
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="px-3 py-1 rounded-full border border-[#FFFFFF]/50 text-[#FFFFFF] font-[family-name:var(--font-poppins)] text-xs"
          >
            {project.type}
          </motion.span>
          <motion.span
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="text-[#FFFFFF]/70 font-[family-name:var(--font-poppins)] text-xs"
          >
            Voir le projet →
          </motion.span>
        </motion.div>
      </div>

      {/* Infos sous la carte */}
      <motion.div
        animate={{ y: hovered ? -3 : 0 }}
        transition={{ duration: 0.3 }}
        className="pt-3"
      >
        <h3 className="font-[family-name:var(--font-dm-sans)] text-sm font-medium text-[#1A1A1A]">
          {project.title}
        </h3>
        <p className="mt-0.5 font-[family-name:var(--font-poppins)] text-xs text-[#8A8278]">
          {project.type}
        </p>
      </motion.div>
    </motion.article>
  )
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
          <span className="inline-block rounded-full bg-[#EDE6D6] px-5 py-1.5 font-[family-name:var(--font-dm-sans)] text-[11px] font-medium text-[#6A6258]">
            Mes créations
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-dm-sans)] text-[32px] font-medium text-[#1A1A1A] lg:text-[40px]">
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
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}