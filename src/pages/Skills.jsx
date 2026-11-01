import Header from '../components/Header.jsx'
import SkillCard from '../components/SkillCard.jsx'
import { habilidades } from '../data/data.js'

function Skills() {
  return (
    <section>
      <Header
        titulo="Habilidades"
        subtitulo="Tocá una tecnología para ver en qué la uso."
      />

      <div className="grid">
        {habilidades.map((h) => (
          <SkillCard
            key={h.id}
            nombre={h.nombre}
            categoria={h.categoria}
            detalle={h.detalle}
          />
        ))}
      </div>
    </section>
  )
}

export default Skills
