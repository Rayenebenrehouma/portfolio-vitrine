'use client'

import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Design sur-mesure',
    description:
      'Chaque site est unique, adapté à l\'activité et la clientèle.',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Livraison rapide',
    description:
      'En ligne en moins de 2 semaines, sans compromis sur la qualité.',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: 'Accompagnement',
    description:
      'Disponible après la livraison pour mises à jour et questions.',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
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
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
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

export default function Mission() {
  return (
    <section id="mission" className="bg-[#FFFFFF] py-16 lg:py-20">
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
            Ma mission
          </span>

          <h2
            className="mt-4 font-[family-name:var(--font-dm-sans)] text-[32px] font-medium text-[#1A1A1A] lg:text-[36px]"
          >
            Pourquoi travailler avec moi ?
          </h2>
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={gridVariants}
        >
          {cards.map((card) => (
            <motion.article
              key={card.title}
              variants={cardVariants}
              className="rounded-xl border border-[#EDE6D6] bg-[#FFFFFF] p-6"
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#F5F0E8]"
                aria-hidden="true"
              >
                {card.icon}
              </div>

              <h3
                className="mt-4 font-[family-name:var(--font-dm-sans)] text-sm font-medium text-[#1A1A1A]"
              >
                {card.title}
              </h3>

              <p
                className="mt-2 font-[family-name:var(--font-poppins)] text-xs font-light leading-relaxed text-[#6A6258]"
              >
                {card.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
