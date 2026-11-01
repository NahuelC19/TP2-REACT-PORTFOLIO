import { useState } from 'react'

// Cada tarjeta recibe sus datos por props y maneja su propio estado:
// al hacer clic se muestra u oculta el detalle de la habilidad.
function SkillCard({ nombre, categoria, detalle }) {
  const [abierta, setAbierta] = useState(false)

  return (
    <article className={abierta ? 'card skill skill--open' : 'card skill'}>
      <button
        type="button"
        className="skill__toggle"
        onClick={() => setAbierta(!abierta)}
        aria-expanded={abierta}
      >
        <span className="skill__name">{nombre}</span>
        <span className="skill__cat">{categoria}</span>
      </button>
      {abierta && <p className="skill__detail">{detalle}</p>}
    </article>
  )
}

export default SkillCard
