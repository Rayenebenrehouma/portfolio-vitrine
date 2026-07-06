'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const forfaits = [
  {
    badge: 'Essentiel',
    nom: 'Starter',
    prix: '490€',
    description: 'Pour démarrer avec un site professionnel',
    inclus: [
      '1 page',
      'Design sur-mesure',
      'Responsive mobile',
      'Formulaire de contact',
    ],
    cta: 'Choisir ce forfait',
    highlight: false,
  },
  {
    badge: 'Le plus populaire',
    nom: 'Vitrine',
    prix: '890€',
    description: 'Pour une présence en ligne complète',
    inclus: [
      "Jusqu'à 5 pages",
      'Design premium',
      'Responsive mobile',
      'SEO de base',
      '1 mois de suivi',
    ],
    cta: 'Choisir ce forfait',
    highlight: true,
  },
  {
    badge: 'Sur-mesure',
    nom: 'Premium',
    prix: 'Sur devis',
    description: 'Pour des besoins avancés et spécifiques',
    inclus: [
      'Pages illimitées',
      'Fonctionnalités avancées',
      'Animations & effets',
      'SEO avancé',
      'Suivi 3 mois',
    ],
    cta: 'Demander un devis',
    highlight: false,
  },
]

function TarifCard({ forfait, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      key={forfait.nom}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        y: hovered ? -8 : 0,
        scale: hovered ? 1.02 : 1,
      }}
      className={`rounded-2xl p-8 flex flex-col gap-6 cursor-pointer transition-shadow duration-300 ${
        forfait.highlight
          ? 'bg-[#1A1A1A] text-[#FFFFFF]'
          : 'bg-[#F5F0E8] text-[#1A1A1A]'
      } ${
        hovered
          ? 'shadow-[0_20px_60px_rgba(0,0,0,0.15)]'
          : 'shadow-none'
      }`}
    >
      <span className={`text-sm px-3 py-1 rounded-full w-fit ${
        forfait.highlight
          ? 'bg-[#FFFFFF]/20 text-[#FFFFFF]'
          : 'bg-[#FFFFFF] text-[#1A1A1A]'
      }`}>
        {forfait.badge}
      </span>

      <div>
        <h3 className="text-2xl font-[family-name:var(--font-dm-sans)] font-medium mb-2">
          {forfait.nom}
        </h3>
        <p className="text-4xl font-[family-name:var(--font-dm-sans)] font-medium">
          {forfait.prix}
        </p>
      </div>

      <ul className="flex flex-col gap-3 flex-1">
        {forfait.inclus.map((item) => (
          <motion.li
            key={item}
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 text-sm font-[family-name:var(--font-poppins)]"
          >
            <span>✓</span> {item}
          </motion.li>
        ))}
      </ul>

      <motion.button
          animate={{
            opacity: hovered ? 0.85 : 1,
          }}
          transition={{ duration: 0.3 }}
          className={`${forfait.highlight ? 'btn-shine-dark' : 'btn-shine'} w-full py-3 rounded-xl text-sm font-[family-name:var(--font-poppins)] ${
            forfait.highlight
              ? 'bg-[#FFFFFF] text-[#1A1A1A]'
              : 'bg-[#1A1A1A] text-[#FFFFFF]'
          }`}
        >
          {forfait.cta}
      </motion.button>
    </motion.div>
  )
}

export default function Tarifs() {
  return (
    <section id="tarifs" className="bg-[#FFFFFF] py-24 px-8">
      <div className="max-w-[1440px] mx-auto">
        <span className="inline-block px-4 py-1 rounded-full border border-[#1A1A1A]/20 text-sm text-[#1A1A1A] mb-6">
          Tarifs
        </span>
        <h2 className="text-4xl font-[family-name:var(--font-dm-sans)] font-medium text-[#1A1A1A] mb-16">
          Des offres claires et transparentes
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {forfaits.map((forfait, index) => (
            <TarifCard key={forfait.nom} forfait={forfait} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}