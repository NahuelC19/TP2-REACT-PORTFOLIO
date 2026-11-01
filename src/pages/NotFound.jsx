import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'

function NotFound() {
  return (
    <section>
      <Header titulo="Página no encontrada" subtitulo="La dirección que abriste no existe." />
      <Link className="btn" to="/">Volver al inicio</Link>
    </section>
  )
}

export default NotFound
