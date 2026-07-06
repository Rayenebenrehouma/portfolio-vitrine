'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const BrowserMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative w-full max-w-[580px]"
    >
      <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#1A1A1A]/10">
        <div className="bg-[#F0EDE6] px-4 py-3 flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 bg-[#FFFFFF] rounded-md px-3 py-1 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#28C840]" />
            <span className="text-xs text-[#1A1A1A]/40 font-[family-name:var(--font-poppins)]">
              www.votre-site.fr
            </span>
          </div>
        </div>
        <div className="bg-[#FFFFFF] p-6 h-[320px] overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <div className="w-16 h-3 bg-[#1A1A1A] rounded-full" />
            <div className="flex gap-3">
              <div className="w-10 h-2 bg-[#1A1A1A]/20 rounded-full" />
              <div className="w-10 h-2 bg-[#1A1A1A]/20 rounded-full" />
              <div className="w-10 h-2 bg-[#1A1A1A]/20 rounded-full" />
              <div className="w-16 h-6 bg-[#1A1A1A] rounded-md" />
            </div>
          </div>
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <div className="w-3/4 h-4 bg-[#1A1A1A] rounded-full mb-2" />
              <div className="w-1/2 h-4 bg-[#1A1A1A] rounded-full mb-4" />
              <div className="w-full h-2 bg-[#1A1A1A]/20 rounded-full mb-2" />
              <div className="w-5/6 h-2 bg-[#1A1A1A]/20 rounded-full mb-4" />
              <div className="flex gap-2">
                <div className="w-20 h-7 bg-[#1A1A1A] rounded-lg" />
                <div className="w-20 h-7 border border-[#1A1A1A]/30 rounded-lg" />
              </div>
            </div>
            <div className="w-32 h-24 bg-[#F5F0E8] rounded-xl" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {['bg-[#C9B99A]', 'bg-[#1A1A1A]', 'bg-[#E8E2D9]'].map((color, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.15 }}
                className={`${color} rounded-lg h-16`}
              />
            ))}
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: 'spring' }}
        className="absolute -bottom-4 -right-4 bg-[#FFFFFF] rounded-2xl shadow-lg px-4 py-3"
      >
        <p className="text-2xl font-[family-name:var(--font-dm-sans)] font-medium text-[#1A1A1A]">+12</p>
        <p className="text-xs text-[#1A1A1A]/50 font-[family-name:var(--font-poppins)]">sites livrés</p>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const words = ["Votre", "business", "mérite", "un", "site", "à", "sa", "hauteur"]

  return (
    <section ref={ref} className="bg-[#FFFFFF] min-h-screen flex items-center px-8">
      <motion.div
        style={{ y, opacity }}
        className="max-w-[1440px] mx-auto w-full flex items-center justify-between gap-16"
      >
        <div className="flex-1 flex flex-col gap-6">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full border border-[#1A1A1A]/20 text-sm text-[#1A1A1A] w-fit font-[family-name:var(--font-poppins)]"
          >
            Designer web freelance
          </motion.span>

          <h1 className="text-6xl font-[family-name:var(--font-dm-sans)] font-medium text-[#1A1A1A] leading-tight flex flex-wrap gap-x-4">
            {words.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 100, filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 1,
                  delay: i * 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="text-[#1A1A1A]/60 font-[family-name:var(--font-poppins)] text-lg max-w-md"
          >
            Je crée des sites vitrines modernes et sur-mesure pour artisans, commerçants et indépendants.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="flex gap-4"
          >
            <a
              href="#creations"
              className="btn-shine px-6 py-3 bg-[#1A1A1A] text-[#FFFFFF] rounded-xl font-[family-name:var(--font-poppins)] text-sm hover:opacity-80 transition-opacity"
            >
              Voir mes créations
            </a>
            <a
              href="#tarifs"
              className="btn-shine-dark px-6 py-3 border border-[#1A1A1A]/30 text-[#1A1A1A] rounded-xl font-[family-name:var(--font-poppins)] text-sm hover:bg-[#1A1A1A]/5 transition-colors"
            >
              Mes Tarifs
            </a>
          </motion.div>
        </div>

        {/* Colonne droite */}
        <div className="flex-1 flex justify-center">
          <BrowserMockup />
        </div>

      </motion.div>
    </section>
          )
        }