import Header from '../components/Header.jsx'
import ContactItem from '../components/ContactItem.jsx'
import { contacto } from '../data/data.js'

function Contact() {
  return (
    <section>
      <Header titulo="Contacto" subtitulo="Escribime, voy a responder lo antes posible." />

      <div className="card">
        <ul className="plain-list">
          <ContactItem etiqueta="Correo" texto={contacto.email} href={`mailto:${contacto.email}`} />
          <ContactItem etiqueta="GitHub" texto={contacto.github} href={contacto.github} />
          <ContactItem etiqueta="LinkedIn" texto={contacto.linkedin} href={contacto.linkedin} />
        </ul>
      </div>
    </section>
  )
}

export default Contact
