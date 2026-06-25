'use client'

import { motion } from 'framer-motion'

const skills = ['Design UI/UX', 'Framer', 'Figma', 'Webflow', 'Responsive']

export default function Apropos() {
  return (
    <section id="apropos" className="bg-[#F5F0E8] py-24 px-8">
      <div className="max-w-[1440px] mx-auto">
        <span className="inline-block px-4 py-1 rounded-full border border-[#1A1A1A]/20 text-sm text-[#1A1A1A] mb-6">
          À propos
        </span>
        <h2 className="text-4xl font-[family-name:var(--font-dm-sans)] font-medium text-[#1A1A1A] mb-16">
          Qui suis-je ?
        </h2>
        <div className="flex gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="w-48 h-48 rounded-full bg-[#1A1A1A] flex items-center justify-center">
              <span className="text-4xl font-[family-name:var(--font-dm-sans)] text-[#F5F0E8]">
                Rb
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <p className="text-lg text-[#1A1A1A]/70 font-[family-name:var(--font-poppins)] leading-relaxed max-w-2xl">
              Passionné par le design web et l'UX, j'accompagne les indépendants 
              et petites entreprises avec des sites beaux, rapides et qui convertissent.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-[#FFFFFF] text-[#1A1A1A] text-sm font-[family-name:var(--font-poppins)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}