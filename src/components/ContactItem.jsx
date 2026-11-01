// Fila de contacto reutilizable: etiqueta + enlace.
function ContactItem({ etiqueta, texto, href }) {
  return (
    <li className="contact-item">
      <span className="contact-item__label">{etiqueta}</span>
      <a href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer">
        {texto}
      </a>
    </li>
  )
}

export default ContactItem
