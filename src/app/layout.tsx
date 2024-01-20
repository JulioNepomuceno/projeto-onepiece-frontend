import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import NextAuthSessionProvider from '@/providers/sessionProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Projeto - One Piece',
  description: 'Projeto criando em NextJs para mostrar os personagens, tripulações e as akuma no mi do anime One piece',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider>
          <Header/>
          {children}
          <ToastContainer autoClose={3000}/>

        </NextAuthSessionProvider>
      </body>
    </html>
  )
}
