# AGENTS.md

## Contexto del proyecto

- Proyecto: Oclock Servicios.
- Web corporativa B2B.
- Landing page estática de una sola página, organizada en secciones.
- Diseño profesional, moderno, limpio y responsive.
- Referencia visual: https://ug-transportation.com/

## Tecnologías

- Astro.
- HTML semántico.
- CSS puro, Flexbox y CSS Grid.
- JavaScript puro.
- Node.js y npm para desarrollo y compilación.
- Git y GitHub.
- HostingPlus para alojamiento estático.

No utilizar Bootstrap, Tailwind, Sass ni otros frameworks CSS.

No incorporar React, backend, bases de datos ni nuevas dependencias sin autorización.

## Arquitectura

- Mantener una arquitectura simple basada en componentes Astro.
- Organizar cada componente en su propia carpeta dentro de `src/components/`.
- Agrupar los archivos Astro, CSS y JavaScript correspondientes dentro de cada carpeta.
- Mantener separados el HTML, CSS y JavaScript.
- Importar el CSS desde el componente correspondiente.
- Cargar los scripts mediante `<script src="./nombre-del-componente.js"></script>`.
- Mantener los estilos globales en `src/styles/global.css`.
- Utilizar `src/pages/index.astro` como página principal.
- Utilizar `src/layouts/` para layouts cuando sean necesarios.
- Utilizar `public/` para recursos estáticos.
- Crear archivos y carpetas únicamente cuando sean necesarios.
- Evitar abstracciones y sobreingeniería.

La navegación debe realizarse mediante anclas HTML dentro de la misma landing page. No crear páginas adicionales sin autorización.

## Convenciones de código

- Escribir código simple, legible y mantenible.
- Utilizar una indentación de 4 espacios.
- Utilizar nombres descriptivos en inglés.
- Utilizar PascalCase para componentes y sus carpetas.
- Utilizar kebab-case para archivos CSS, JavaScript y clases CSS.
- Utilizar camelCase para variables y funciones JavaScript.
- Preferir funciones flecha cuando corresponda.
- Utilizar comentarios breves en español cuando sean necesarios.
- Evitar código duplicado, muerto o innecesario.
- Priorizar las funcionalidades nativas de Astro.
- No anticipar funcionalidades futuras.

## CSS

### Organización y sintaxis

- Utilizar archivos CSS independientes.
- Centralizar variables, reset, tipografía y estilos compartidos en `global.css`.
- No utilizar bloques `<style>` ni estilos inline.
- Priorizar clases sobre identificadores para aplicar estilos.
- Reservar los identificadores principalmente para navegación y elementos únicos.
- Utilizar clases descriptivas y específicas del componente, como `.hero-title` y `.header-menu`.
- No utilizar la metodología BEM.
- Preferir propiedades tradicionales frente a propiedades lógicas innecesarias.
- Mantener una línea en blanco entre bloques de selectores.
- Evitar selectores complejos y especificidad innecesaria.
- No utilizar `!important`.

### Shorthand

- Priorizar shorthand para margin, padding, border, background y flex cuando simplifique el código.
- Utilizar la menor cantidad de valores necesarios.
- Utilizar propiedades individuales cuando solo cambie un valor específico.
- Evitar shorthand cuando pueda sobrescribir otras propiedades involuntariamente.

### Unidades y dimensiones

- `rem`: márgenes, padding, gap y tamaños generales de fuente.
- `em`: iconos y textos relativos a la tipografía del componente.
- `%`: unidad preferente para width, max-width y dimensiones relativas al contenedor.
- `px`: breakpoints, bordes y dimensiones que requieran precisión.
- `vh`, `svh` y `vw`: dimensiones relativas al viewport cuando corresponda.
- `fr`: distribución mediante CSS Grid.
- Utilizar line-height sin unidad.
- Priorizar dimensiones flexibles.
- Utilizar dimensiones fijas únicamente cuando sean necesarias.
- No utilizar unidades ch, ex, cap, ic, lh ni rlh.
- Evitar clamp(), calc(), min() y max() cuando exista una solución convencional más sencilla.
- Respetar el tamaño de fuente raíz del navegador.

### Responsive

- Priorizar Flexbox para distribuciones unidimensionales y Grid para filas y columnas.
- Trabajar con enfoque mobile-first.
- Mantener las media queries al final de cada archivo CSS.
- Utilizar siempre breakpoints en píxeles.
- Ordenar los breakpoints de menor a mayor.
- Utilizar la sintaxis `@media screen and (min-width: 768px)`.
- Sobrescribir únicamente las propiedades que necesiten cambiar.

Breakpoints de referencia: 576px, 768px, 992px, 1200px y 1440px.

Utilizar únicamente los breakpoints necesarios para cada componente.

### Identidad visual

| Variable | Color |
|---|---|
| `--color-primary` | #161616 |
| `--color-accent` | #2873B9 |
| `--color-light` | #F4F4F4 |
| `--color-white` | #FFFFFF |
| `--color-text` | #333333 |

Tipografía: Open Sans, sans-serif.

Reutilizar las variables de `global.css`. No modificar la identidad visual sin autorización.

## JavaScript

- No utilizar JavaScript mientras no sea estrictamente necesario.
- Priorizar siempre HTML y CSS nativos.
- Los componentes estáticos no deben utilizar JavaScript de navegador.
- No crear scripts para funcionalidades futuras o no solicitadas.
- Solicitar autorización antes de incorporar nuevas funcionalidades JavaScript.
- Mantener los archivos JavaScript independientes dentro de la carpeta del componente correspondiente.
- Implementar únicamente la lógica indispensable para resolver la funcionalidad autorizada.
- Preferir funciones flecha, const y let cuando corresponda.
- Evitar abstracciones, validaciones redundantes y complejidad innecesaria.
- Mantener la accesibilidad y el correcto funcionamiento.
- No utilizar JavaScript para navegación por anclas, estilos o distribuciones responsive que puedan resolverse mediante HTML y CSS.
- Permitir el frontmatter de Astro para importaciones y generación de HTML.
- No incorporar librerías ni frameworks JavaScript sin autorización.

La ausencia de JavaScript en el navegador debe ser la condición predeterminada del proyecto.

## React

- Utilizar React únicamente para componentes con interactividad compleja o gestión de múltiples estados.
- Priorizar Astro, HTML, CSS y JavaScript puro para funcionalidades sencillas.
- Solicitar autorización antes de instalar React o desarrollar componentes con esta tecnología.
- Integrar React mediante la arquitectura de islas de Astro.
- Mantener los componentes React y sus estilos CSS en carpetas independientes por componente.
- No convertir la landing page en una SPA.
- Cargar JavaScript de React únicamente en los componentes que requieran interactividad.

## Contenido

- No inventar información corporativa, servicios, clientes, estadísticas, testimonios, certificaciones ni datos de contacto.
- No inventar rutas de archivos o recursos inexistentes.
- Utilizar únicamente información proporcionada o aprobada por el desarrollador.
- Identificar los contenidos provisionales.
- Solicitar información cuando sea necesaria.
- Mantener los contenidos en español de Chile.
- Utilizar la web de referencia como inspiración, sin copiar sus contenidos ni identidad corporativa.

## SEO, accesibilidad y rendimiento

- Utilizar HTML semántico y una jerarquía correcta de encabezados.
- Optimizar imágenes y recursos.
- Utilizar textos alternativos descriptivos.
- Mantener un contraste adecuado.
- Garantizar la navegación mediante teclado.
- Utilizar atributos ARIA cuando corresponda.
- Evitar recursos y procesamiento innecesarios.
- Priorizar la velocidad de carga.

## Metodología de trabajo

- Trabajar de manera incremental y dentro del alcance solicitado.
- Consultar únicamente los archivos relevantes para cada tarea.
- Respetar el código y las decisiones previamente aprobadas.
- No modificar archivos ajenos a la solicitud.
- No implementar funcionalidades que no hayan sido solicitadas.
- No avanzar a otras etapas sin autorización.
- Mantener respuestas breves y precisas.
- No repetir código innecesariamente.
- Informar los archivos modificados y las decisiones relevantes.

## Autorizaciones obligatorias

Solicitar autorización explícita antes de:

- Modificar la arquitectura o configuraciones críticas.
- Instalar, eliminar o actualizar dependencias.
- Eliminar archivos existentes.
- Realizar refactorizaciones generales.
- Modificar estilos globales fuera del alcance solicitado.
- Cambiar la identidad visual o funcionalidades aprobadas.
- Ejecutar comandos destructivos.
- Realizar commits, push o cambios de ramas.
- Publicar o desplegar el sitio.

Ante decisiones críticas no definidas, consultar primero al desarrollador.

## Verificación

- Verificar los cambios realizados.
- Ejecutar `npm run build` cuando corresponda.
- Informar errores y limitaciones.
- No afirmar que una implementación funciona sin haberla verificado.

Documentación oficial: https://docs.astro.build/