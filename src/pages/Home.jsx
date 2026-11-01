import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import { perfil } from '../data/data.js'

function Home() {
  return (
    <section>
      <Header
        titulo={`Hola, soy ${perfil.nombre}`}
        subtitulo="Estudiante de Programación en la UTN Tucumán, en busca de mi primera oportunidad en sistemas."
      />

      <p className="lead">
        Estoy terminando la Tecnicatura Universitaria en Programación. Este año aprendí
        React y trabajo con JavaScript, C# y SQL. Vengo del mundo de la atención al cliente,
        así que me gusta escribir software que resuelva problemas de personas reales.
      </p>

      <div className="card">
        <h2>Qué vas a encontrar en este sitio</h2>
        <ul className="plain-list">
          <li><Link to="/about">Sobre mí</Link>: mi formación, experiencia y objetivos.</li>
          <li><Link to="/skills">Habilidades</Link>: las tecnologías que uso.</li>
          <li><Link to="/projects">Proyectos</Link>: trabajos con su código en GitHub.</li>
          <li><Link to="/contact">Contacto</Link>: cómo escribirme.</li>
        </ul>
      </div>
    </section>
  )
}

export default Home
