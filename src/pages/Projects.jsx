import Header from '../components/Header.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { proyectos } from '../data/data.js'

function Projects() {
  return (
    <section>
      <Header
        titulo="Proyectos"
        subtitulo="Trabajos que hice durante la cursada y por mi cuenta."
      />

      <div className="grid">
        {proyectos.map((p) => (
          <ProjectCard
            key={p.id}
            nombre={p.nombre}
            descripcion={p.descripcion}
            detalle={p.detalle}
            tecnologias={p.tecnologias}
            repo={p.repo}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
