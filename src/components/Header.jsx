// Encabezado reutilizable de cada página. Recibe título y subtítulo por props.
function Header({ titulo, subtitulo }) {
  return (
    <header className="page-header">
      <h1>{titulo}</h1>
      {subtitulo && <p className="page-header__sub">{subtitulo}</p>}
    </header>
  )
}

export default Header
