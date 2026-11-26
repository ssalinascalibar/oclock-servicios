# Oclock Servicios

Web corporativa B2B desarrollada con Astro para presentar los servicios de Oclock mediante una landing page estática, profesional y responsive.

## Objetivo

Presentar las líneas de negocio de la empresa, fortalecer su presencia digital y facilitar el contacto con potenciales clientes corporativos.

## Stack tecnológico

- Astro
- HTML5
- CSS puro
- Flexbox y CSS Grid
- JavaScript puro
- Node.js y npm
- Git y GitHub

## Requisitos

- Node.js >= 22.23.4, según package.json.
- npm.

## Arquitectura

El proyecto utiliza una arquitectura sencilla basada en carpetas por componente, manteniendo separados el HTML, CSS y JavaScript.

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

Cada componente contiene sus propios estilos y, cuando necesita interactividad, un archivo JavaScript independiente.

Los estilos compartidos se centralizan en `src/styles/global.css`.

La navegación se realiza mediante anclas HTML dentro de la misma página.

Las carpetas y componentes se incorporarán progresivamente según las necesidades del proyecto.

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

Las convenciones de código, restricciones y reglas de desarrollo se encuentran en `AGENTS.md`.

## Estado

En desarrollo.