import { useState } from 'react'
import Header from '../components/Header.jsx'

function About() {
  // Estado que muestra u oculta la sección de experiencia laboral.
  const [verExperiencia, setVerExperiencia] = useState(false)

  return (
    <section>
      <Header titulo="Sobre mí" subtitulo="Formación, intereses y hacia dónde quiero ir." />

      <div className="card">
        <h2>Perfil</h2>
        <p>
          Soy de San Miguel de Tucumán y estudio la Tecnicatura Universitaria en Programación
          en la UTN-FRT, donde ya cursé la mayor parte de la carrera. Me interesa el desarrollo
          web y el trabajo con bases de datos, y uso herramientas de IA como apoyo para aprender
          más rápido sin dejar de entender el código que escribo.
        </p>
      </div>

      <div className="card">
        <h2>Formación</h2>
        <ul className="plain-list">
          <li>Tecnicatura Universitaria en Programación, UTN-FRT (en curso).</li>
          <li>Bachiller en Economía y Administración, Instituto Cervantes (2022).</li>
          <li>Inglés técnico intermedio y portugués básico.</li>
        </ul>
      </div>

      <div className="card">
        <h2>Objetivo profesional</h2>
        <p>
          Sumarme a un equipo de sistemas para seguir creciendo como desarrollador, aportando
          lo que aprendí en la facultad y mi experiencia de trabajo con el público.
        </p>
      </div>

      <button type="button" className="btn" onClick={() => setVerExperiencia(!verExperiencia)}>
        {verExperiencia ? 'Ocultar experiencia laboral' : 'Ver experiencia laboral'}
      </button>

      {verExperiencia && (
        <div className="card card--accent">
          <h2>Experiencia laboral</h2>
          <ul className="plain-list">
            <li>Call center de cobranzas (actualidad).</li>
            <li>Atención al cliente y caja en Gómez Pardo (1 año).</li>
            <li>Barman y bachero en Ruda Miramar (1 año).</li>
          </ul>
        </div>
      )}
    </section>
  )
}

export default About
