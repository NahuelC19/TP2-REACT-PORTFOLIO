import { NavLink } from 'react-router-dom'
import { navegacion, perfil } from '../data/data.js'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <span className="sidebar__avatar" aria-hidden="true">NC</span>
        <div>
          <p className="sidebar__name">{perfil.nombre}</p>
          <p className="sidebar__role">{perfil.rol}</p>
        </div>
      </div>

      <nav className="sidebar__nav" aria-label="Navegación principal">
        <ul>
          {navegacion.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.ruta}
                end={item.ruta === '/'}
                className={({ isActive }) =>
                  isActive ? 'nav-link nav-link--active' : 'nav-link'
                }
              >
                {item.texto}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <p className="sidebar__city">{perfil.ciudad}</p>
    </aside>
  )
}

export default Sidebar
