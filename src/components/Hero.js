'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  return (
    <section className="bg-[#FFFFFF] min-h-[750px]">
      <div className="mx-auto flex max-w-[1440px] items-center gap-12 px-8 py-12 lg:gap-16 lg:px-20 lg:py-16">
        <div className="flex-1">
          <motion.span
            className="inline-block rounded-full bg-[#EDE6D6] px-5 py-1.5 font-[family-name:var(--font-dm-sans)] text-[11px] font-medium text-[#6A6258]"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
          >
            Designer web freelance
          </motion.span>

          <motion.h1
            className="mt-6 font-[family-name:var(--font-dm-sans)] text-[40px] font-medium leading-tight text-[#1A1A1A] lg:text-[56px]"
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
          >
            Votre business mérite
            <br />
            un site à sa hauteur
          </motion.h1>

          <motion.p
            className="mt-8 max-w-[520px] font-[family-name:var(--font-poppins)] text-[15px] font-light leading-relaxed text-[#6A6258]"
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
          >
            Je crée des sites vitrines modernes et sur-mesure pour artisans,
            commerçants et indépendants.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
          >
            <a
              href="#creations"
              className="flex h-12 min-w-[185px] items-center justify-center rounded-[10px] bg-[#1A1A1A] px-6 font-[family-name:var(--font-poppins)] text-[15px] font-light text-[#FFFFFF] transition-opacity hover:opacity-90"
            >
              Voir mes créations
            </a>
            <a
              href="#tarifs"
              className="flex h-12 min-w-[130px] items-center justify-center rounded-[10px] border border-[#D4CAB8] bg-[#FFFFFF] px-6 font-[family-name:var(--font-poppins)] text-[15px] font-light text-[#1A1A1A] transition-opacity hover:opacity-90"
            >
              Mes Tarifs
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative hidden flex-1 lg:block"
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
        >
          <div className="relative mx-auto h-[460px] w-full max-w-[560px] rounded-[20px] bg-[#F5F0E8]">
            <div className="absolute left-[90px] top-[80px] h-[200px] w-[260px] rounded-xl border border-[#EDE6D6] bg-[#FFFFFF] p-6">
              <div className="h-2 w-[160px] rounded bg-[#C8B89A]" />
              <div className="mt-4 h-1.5 w-[200px] rounded bg-[#E2DAC8] opacity-60" />
              <div className="mt-2 h-1.5 w-[160px] rounded bg-[#E2DAC8]" />
              <div className="mt-2 h-1.5 w-[160px] rounded bg-[#E2DAC8]" />
            </div>

            <div className="absolute bottom-10 right-10 rounded-xl border border-[#EDE6D6] bg-[#FFFFFF] px-5 py-3">
              <p className="font-[family-name:var(--font-dm-sans)] text-[22px] font-medium text-[#1A1A1A]">
                +12
              </p>
              <p className="font-[family-name:var(--font-poppins)] text-[11px] text-[#8A8278]">
                site livrés
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
