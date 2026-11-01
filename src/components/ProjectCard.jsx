import { useState } from 'react'

// Props: nombre, descripcion, detalle, tecnologias (array) y repo.
function ProjectCard({ nombre, descripcion, detalle, tecnologias, repo }) {
  const [verMas, setVerMas] = useState(false)

  return (
    <article className="card project">
      <h2>{nombre}</h2>
      <p>{descripcion}</p>

      {verMas && <p className="project__detail">{detalle}</p>}

      <ul className="tags">
        {tecnologias.map((tec) => (
          <li key={tec}>{tec}</li>
        ))}
      </ul>

      <div className="project__actions">
        <button type="button" className="btn btn--ghost" onClick={() => setVerMas(!verMas)}>
          {verMas ? 'Ver menos' : 'Ver más'}
        </button>
        <a className="btn" href={repo} target="_blank" rel="noreferrer">
          Repositorio
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
