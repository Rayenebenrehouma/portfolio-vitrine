'use client'

import { motion } from 'framer-motion'

const BrowserMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative w-full max-w-[580px]"
    >
      {/* Fenêtre navigateur */}
      <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#1A1A1A]/10">
        
        {/* Barre du navigateur */}
        <div className="bg-[#F0EDE6] px-4 py-3 flex items-center gap-3">
          {/* Boutons traffic light */}
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          {/* Barre d'adresse */}
          <div className="flex-1 bg-[#FFFFFF] rounded-md px-3 py-1 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#28C840]" />
            <span className="text-xs text-[#1A1A1A]/40 font-[family-name:var(--font-poppins)]">
              www.votre-site.fr
            </span>
          </div>
        </div>

        {/* Contenu du site simulé */}
        <div className="bg-[#FFFFFF] p-6 h-[320px] overflow-hidden">
          
          {/* Navbar simulée */}
          <div className="flex items-center justify-between mb-6">
            <div className="w-16 h-3 bg-[#1A1A1A] rounded-full" />
            <div className="flex gap-3">
              <div className="w-10 h-2 bg-[#1A1A1A]/20 rounded-full" />
              <div className="w-10 h-2 bg-[#1A1A1A]/20 rounded-full" />
              <div className="w-10 h-2 bg-[#1A1A1A]/20 rounded-full" />
              <div className="w-16 h-6 bg-[#1A1A1A] rounded-md" />
            </div>
          </div>

          {/* Hero simulé */}
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

          {/* Cards simulées */}
          <div className="grid grid-cols-3 gap-3">
            {[
              'bg-[#C9B99A]',
              'bg-[#1A1A1A]',
              'bg-[#E8E2D9]',
            ].map((color, i) => (
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

      {/* Badge +12 sites livrés */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: 'spring' }}
        className="absolute -bottom-4 -right-4 bg-[#FFFFFF] rounded-2xl shadow-lg px-4 py-3"
      >
        <p className="text-2xl font-[family-name:var(--font-dm-sans)] font-medium text-[#1A1A1A]">+12</p>
        <p className="text-xs text-[#1A1A1A]/50 font-[family-name:var(--font-poppins)]">sites livrés</p>
      </motion.div>

      {/* Effet de flottement */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 pointer-events-none"
      />
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="bg-[#FFFFFF] min-h-screen flex items-center px-8">
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between gap-16">
        
        {/* Colonne gauche */}
        <div className="flex-1 flex flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full border border-[#1A1A1A]/20 text-sm text-[#1A1A1A] w-fit font-[family-name:var(--font-poppins)]"
          >
            Designer web freelance
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl font-[family-name:var(--font-dm-sans)] font-medium text-[#1A1A1A] leading-tight"
          >
            Votre business mérite un site à sa hauteur
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#1A1A1A]/60 font-[family-name:var(--font-poppins)] text-lg max-w-md"
          >
            Je crée des sites vitrines modernes et sur-mesure pour artisans, commerçants et indépendants.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-4"
          >
            <a
              href="#creations"
              className="px-6 py-3 bg-[#1A1A1A] text-[#FFFFFF] rounded-xl font-[family-name:var(--font-poppins)] text-sm hover:opacity-80 transition-opacity"
            >
              Voir mes créations
            </a>
            <a
              href="#tarifs"
              className="px-6 py-3 border border-[#1A1A1A]/30 text-[#1A1A1A] rounded-xl font-[family-name:var(--font-poppins)] text-sm hover:bg-[#1A1A1A]/5 transition-colors"
            >
              Mes Tarifs
            </a>
          </motion.div>
        </div>

        {/* Colonne droite */}
        <div className="flex-1 flex justify-center">
          <BrowserMockup />
        </div>

      </div>
    </section>
  )
}