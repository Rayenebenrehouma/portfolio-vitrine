'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    activite: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section id="contact" className="bg-[#F5F0E8] py-24 px-8">
      <div className="max-w-[1440px] mx-auto">
        <span className="inline-block px-4 py-1 rounded-full border border-[#1A1A1A]/20 text-sm text-[#1A1A1A] mb-6">
          Contact
        </span>
        <h2 className="text-4xl font-[family-name:var(--font-dm-sans)] font-medium text-[#1A1A1A] mb-4">
          Parlons de votre projet
        </h2>
        <p className="text-[#1A1A1A]/60 font-[family-name:var(--font-poppins)] mb-16">
          Prêt à lancer votre site — réponse sous 24h
        </p>
        <div className="grid grid-cols-2 gap-16">

          {/* Colonne gauche */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <span className="text-sm text-[#1A1A1A]/50 font-[family-name:var(--font-poppins)]">Email</span>
              <span className="text-[#1A1A1A] font-[family-name:var(--font-poppins)]">rayenebenrehouma@outlook.com</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-[#1A1A1A]/50 font-[family-name:var(--font-poppins)]">Téléphone</span>
              <span className="text-[#1A1A1A] font-[family-name:var(--font-poppins)]">07 83 09 92 00</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-[#1A1A1A]/50 font-[family-name:var(--font-poppins)]">Zone</span>
              <span className="text-[#1A1A1A] font-[family-name:var(--font-poppins)]">Disponible toute la France</span>
            </div>
          </motion.div>

          {/* Colonne droite — Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="nom"
              placeholder="Votre nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] text-[#1A1A1A] font-[family-name:var(--font-poppins)] text-sm outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] text-[#1A1A1A] font-[family-name:var(--font-poppins)] text-sm outline-none"
            />
            <input
              type="text"
              name="activite"
              placeholder="Votre activité"
              value={formData.activite}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] text-[#1A1A1A] font-[family-name:var(--font-poppins)] text-sm outline-none"
            />
            <textarea
              name="message"
              placeholder="Décrivez votre projet..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] text-[#1A1A1A] font-[family-name:var(--font-poppins)] text-sm outline-none resize-none"
            />
            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-[#1A1A1A] text-[#FFFFFF] rounded-xl text-sm font-[family-name:var(--font-poppins)] hover:opacity-80 transition-opacity"
            >
              Envoyer le message
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}