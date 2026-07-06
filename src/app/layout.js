import { DM_Sans, Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Portfolio - Rayene Ben Rehouma',
  description: 'Développeur web fullstack',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${dmSans.variable} ${poppins.variable}`}>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}