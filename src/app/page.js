import Hero from '@/components/Hero'
import Creations from '@/components/Creations'
import Mission from '@/components/Mission'
import Apropos from '@/components/Apropos'
import Tarifs from '@/components/Tarifs'

export default function Home() {
  return (
    <main className="pt-[72px]">
      <Hero />
      <Creations />
      <Mission />
      <Apropos />
      <Tarifs />
    </main>
  )
}