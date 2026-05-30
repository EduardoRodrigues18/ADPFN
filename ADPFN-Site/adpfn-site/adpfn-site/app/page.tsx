// ===== app/page.tsx =====
export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="overlay" />

        <div className="hero-content">
          <h2>Bem-vindo à casa de Deus</h2>

          <p>
            Um lugar de fé, comunhão e transformação.
          </p>

          <a href="#cultos" className="btn">
            Ver horários
          </a>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="section">
        <div className="container grid">
          <div className="text">
            <h3>Sobre a Igreja</h3>

            <p>
              Somos uma igreja comprometida com a Palavra de Deus,
              levando esperança, amor e salvação através de Jesus Cristo.
            </p>
          </div>

          <img src="/IconADPFN.png" className="img" alt="Logo Igreja" />
        </div>
      </section>

      {/* Cultos */}
      <section id="cultos" className="section light">
        <div className="container">
          <h3>Horários dos Cultos</h3>

          <div className="cards">
            <div className="card">Domingo - 19h</div>
            <div className="card">Quarta - 20h</div>
            <div className="card">Sexta - 20h</div>
          </div>
        </div>
      </section>
      
{/* Departamentos */}
<section id="departamentos" className="section departamentos">
  <div className="container">
    <h3>Departamentos</h3>

    <div className="departamentos-grid">

      <div className="departamento-item">
        <img src="/FamiliaIcon.jpeg" className="icone" alt="Logo Igreja" />

        <h4>Família</h4>

        <p>
          Fortalecendo lares através da Palavra de Deus.
        </p>
      </div>

      <div className="departamento-item">
        <img src="/MjIcon.jpeg" className="icone" alt="Logo Igreja" />

        <h4>Jovens</h4>

        <p>
          Uma geração apaixonada por Jesus e pelo evangelho.
        </p>
      </div>

      <div className="departamento-item">
        <img src="/DiaconiaIcon.jpeg" className="icone" alt="Logo Igreja" />

        <h4>Diaconia</h4>

        <p>
          Servindo com amor e dedicação.
        </p>
      </div>

      <div className="departamento-item">
        <img src="/UFADPANIcon.jpeg" className="icone" alt="Logo Igreja" />

        <h4>UFADPAN</h4>

        <p>
          Mulheres comprometidas com oração e serviço.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* Contato */}
      <section id="contato" className="section">
        <div className="container contato">
          <h3>Contato</h3>

          <p>📍 Passo Fundo - RS</p>
          <p>📱 (54) 99999-9999</p>
          <p>✉️ contato@adpfn.com</p>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} ADPFN</p>
      </footer>
    </main>
  )
}