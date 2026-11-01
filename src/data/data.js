// Datos locales del portfolio. Editá acá tus datos reales.

export const perfil = {
  nombre: 'Nahuel Ariel Condori',
  rol: 'Estudiante de Programación',
  ciudad: 'San Miguel de Tucumán, Argentina',
}

export const contacto = {
  email: 'tu-email@ejemplo.com', // TODO: reemplazar por tu mail real
  github: 'https://github.com/tu-usuario', // TODO: reemplazar
  linkedin: 'https://www.linkedin.com/in/tu-usuario', // TODO: reemplazar
}

export const navegacion = [
  { id: 1, ruta: '/', texto: 'Inicio' },
  { id: 2, ruta: '/about', texto: 'Sobre mí' },
  { id: 3, ruta: '/skills', texto: 'Habilidades' },
  { id: 4, ruta: '/projects', texto: 'Proyectos' },
  { id: 5, ruta: '/contact', texto: 'Contacto' },
]

export const habilidades = [
  { id: 1, nombre: 'JavaScript', categoria: 'Frontend', detalle: 'Lenguaje base de todos mis proyectos web: funciones, arrays, eventos y manejo de JSON.' },
  { id: 2, nombre: 'React', categoria: 'Frontend', detalle: 'Componentes, JSX, props, useState y navegación con React Router DOM.' },
  { id: 3, nombre: 'HTML', categoria: 'Frontend', detalle: 'Maquetado semántico de páginas y formularios.' },
  { id: 4, nombre: 'CSS', categoria: 'Frontend', detalle: 'Estilos, flexbox, grid y diseño responsive.' },
  { id: 5, nombre: 'Bootstrap', categoria: 'Frontend', detalle: 'Armado rápido de interfaces con su sistema de grillas y componentes.' },
  { id: 6, nombre: 'C#', categoria: 'Backend y datos', detalle: 'Programación orientada a objetos y aplicaciones de consola.' },
  { id: 7, nombre: 'SQL', categoria: 'Backend y datos', detalle: 'Consultas, joins y diseño de tablas relacionales.' },
  { id: 8, nombre: 'CRUD y JSON', categoria: 'Backend y datos', detalle: 'Operaciones de alta, baja, modificación y lectura de datos, con intercambio en formato JSON.' },
  { id: 9, nombre: 'Git y GitHub', categoria: 'Herramientas', detalle: 'Control de versiones y repositorios para entregar mis trabajos.' },
  { id: 10, nombre: 'IA y LLMs', categoria: 'Herramientas', detalle: 'Uso de modelos de lenguaje como apoyo para programar, aprender y depurar.' },
]

export const proyectos = [
  {
    id: 1,
    nombre: 'Portfolio personal',
    descripcion: 'Mi sitio personal: primero una sola página (TP1) y ahora multipágina con React Router DOM.',
    detalle: 'Incluye menú lateral, páginas de inicio, sobre mí, habilidades, proyectos y contacto. Los datos se generan desde arrays con map().',
    tecnologias: ['React', 'Vite', 'React Router DOM', 'CSS'],
    repo: 'https://github.com/tu-usuario/tp2-portfolio', // TODO
  },
  {
    id: 2,
    nombre: 'Gestor de tareas',
    descripcion: 'Aplicación para crear, editar, completar y eliminar tareas.',
    detalle: 'Practica un CRUD completo con estado en React. Los datos se manejan como objetos JSON y la lista se actualiza en pantalla al instante.',
    tecnologias: ['JavaScript', 'React', 'JSON'],
    repo: 'https://github.com/tu-usuario/gestor-tareas', // TODO
  },
  {
    id: 3,
    nombre: 'Sistema de clientes y deudas',
    descripcion: 'Aplicación de escritorio para registrar clientes y consultar sus deudas.',
    detalle: 'Usa una base de datos SQL con tablas de clientes y pagos, y una capa en C# que permite buscar, filtrar y actualizar registros.',
    tecnologias: ['C#', 'SQL'],
    repo: 'https://github.com/tu-usuario/clientes-deudas', // TODO
  },
]
