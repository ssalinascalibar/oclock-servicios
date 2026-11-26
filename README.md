# Oclock Servicios

Web corporativa B2B desarrollada mediante Astro para presentar los servicios de Oclock a través de una landing page estática, profesional y responsive.

## Objetivo

Presentar las líneas de negocio de la empresa, fortalecer su presencia digital y facilitar el contacto con potenciales clientes corporativos.

## Stack tecnológico

- Astro
- HTML5
- CSS puro
- Flexbox
- CSS Grid
- JavaScript
- Node.js y npm
- Git y GitHub

## Arquitectura

Estructura sencilla basada en carpetas por componente. Cada carpeta agrupa su archivo Astro, sus estilos CSS y su JavaScript de navegador cuando existe interactividad.

```text
src/
├── components/
│   ├── Header/
│   │   ├── Header.astro
│   │   ├── header.css
│   │   └── header.js
│   └── Hero/
│       ├── Hero.astro
│       └── hero.css
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```

- `src/pages/`: páginas.
- `src/components/`: carpetas de componentes con sus archivos Astro, CSS y JavaScript.
- `src/styles/global.css`: variables, reset, tipografía y estilos compartidos.
- `src/layouts/`: layouts, cuando sean necesarios.
- `public/`: recursos estáticos.

Las carpetas de componentes y archivos Astro utilizan PascalCase; los archivos CSS y JavaScript utilizan kebab-case. Cada componente importa su CSS mediante una ruta relativa y carga su JavaScript con un `<script src="./nombre-del-componente.js"></script>` procesado por Astro. La lógica del navegador permanece en el archivo JavaScript independiente.

Header contiene la lógica del menú móvil. Hero no necesita un archivo JavaScript.

Las carpetas y componentes se crearán progresivamente según las necesidades del proyecto.

## Desarrollo local

| Comando | Descripción |
|---|---|
| `npm install` | Instalar dependencias |
| `npm run dev` | Iniciar servidor de desarrollo |
| `npm run build` | Compilar para producción |
| `npm run preview` | Visualizar la compilación |

Servidor local: http://localhost:4321/

## Producción

- Hosting: HostingPlus.
- Compilación estática.
- Directorio de salida: `dist/`.
- No requiere Node.js en producción.

## Referencia visual

https://ug-transportation.com/

## Repositorio

https://github.com/ssalinascalibar/oclock-servicios

## Metodología

Desarrollo incremental mediante VS Code, Codex y GitHub.

Las reglas e instrucciones de desarrollo se encuentran en `AGENTS.md`.

## Estado

En desarrollo.
