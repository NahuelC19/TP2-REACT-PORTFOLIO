# TP2 - Portfolio multipágina con React Router DOM

- **Alumno:** Nahuel Ariel Condori
- **Comisión:** (C7)
- **Repositorio:** (https://github.com/NahuelC19/TP2-REACT-PORTFOLIO.git)

## Descripción

Portfolio personal multipágina, continuación del TP1. Tiene un menú lateral (30 % del ancho)
que permanece visible y un área de contenido (70 %) que cambia según la ruta:

| Página | Ruta |
| --- | --- |
| Inicio | `/` |
| Sobre mí | `/about` |
| Habilidades | `/skills` |
| Proyectos | `/projects` |
| Contacto | `/contact` |

La navegación usa `BrowserRouter`, `Routes`, `Route` y `NavLink` (la opción activa se resalta).
Habilidades y proyectos se generan desde arrays con `map()` y `key`. Hay interacciones con
`useState` y `onClick` (detalle de habilidades, "Ver más" en proyectos y experiencia laboral
en Sobre mí).

## Tecnologías

React 18, Vite, React Router DOM 6, JavaScript (JSX) y CSS.

## Instalación y ejecución

```bash
npm install
npm run dev
```

La aplicación queda disponible en `http://localhost:5173`.

Para generar la versión de producción: `npm run build`.

## Estructura

```
src/
├── components/   Sidebar, Header, ProjectCard, SkillCard, ContactItem
├── pages/        Home, About, Skills, Projects, Contact, NotFound
├── data/         data.js (arrays de habilidades, proyectos, navegación)
├── App.jsx
├── main.jsx
└── index.css
```
