import Hero from '@/components/Hero'
import Creations from '@/components/Creations'
import Mission from '@/components/Mission'
import Apropos from '@/components/Apropos'
import Tarifs from '@/components/Tarifs'
import Contact from '@/components/Contact'  
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="pt-[72px]">
      <Hero />
      <Creations />
      <Mission />
      <Apropos />
      <Tarifs />
      <Contact />
      <Footer />
    </main>
  )
}