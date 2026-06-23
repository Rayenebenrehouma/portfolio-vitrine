import Hero from '@/components/Hero'
import Creations from '@/components/Creations'
import Mission from '@/components/Mission'

export default function Home() {
  return (
    <main className="pt-[72px]">
      <Hero />
      <Creations />
      <Mission />
    </main>
  )
}
