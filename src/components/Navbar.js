'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Créations', href: '#creations' },
  { label: 'Mission', href: '#mission' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Tarifs', href: '#tarifs' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-500 ${
        scrolled
          ? 'bg-[#FFFFFF]/90 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]'
          : 'bg-transparent shadow-none'
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-8 lg:px-10">
        <a
          href="#"
          className="font-[family-name:var(--font-dm-sans)] text-xl font-medium text-[#1A1A1A]"
        >
          studio.
        </a>

        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-dm-sans)] text-xl font-medium text-[#1A1A1A] transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className={`flex h-[38px] min-w-[130px] items-center justify-center px-4 text-[13px] transition-all duration-500 ${
              scrolled
                ? 'bg-[#1A1A1A] text-[#FFFFFF] hover:opacity-90'
                : 'bg-[#1A1A1A] text-[#FFFFFF] hover:opacity-90'
            }`}
          >
            Me contacter
          </a>
        </nav>
      </div>
    </header>
  )
}