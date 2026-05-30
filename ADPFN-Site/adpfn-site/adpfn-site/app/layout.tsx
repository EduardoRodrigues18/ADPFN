// ===== app/layout.tsx =====

import type { Metadata } from "next"
import { Poppins } from "next/font/google"

import "./globals.css"
import Navbar from "../Components/navbar"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
})

export const metadata: Metadata = {
  title: "ADPFN",
  description: "Assembleia de Deus Passo Fundo Norte",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Navbar />

        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  )
}