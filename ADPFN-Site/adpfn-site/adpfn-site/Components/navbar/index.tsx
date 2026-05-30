// Components/navbar/index.tsx

"use client"

import "./index.css"
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-content">

        <div className="logo-area">
          <Image
            src="/IconADPFN.png"
            alt="Logo"
            width={100}
            height={100}
          />

          <div>
            <h1>Assembleia de Deus</h1>
            <p>Passo Fundo Norte</p>
          </div>
        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav active" : "nav"}>
          <a href="#cultos">Cultos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
          <a href="#departamentos">Departamentos</a>
        </nav>

      </div>
    </header>
  )
}