"use client"
import { AuthProvider } from './Providers'
import './styles/globals.css'
import { Inter } from 'next/font/google'
import { ThirdwebProvider } from "@thirdweb-dev/react";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'defndr',
  description: 'defndr website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider activeChain="ethereum" clientId="7363129d03b0ff037ebe266f4c74e4eb"  
      >
           <AuthProvider>{children}</AuthProvider> 
        </ThirdwebProvider>
  
        </body>
    </html>
  )
}
