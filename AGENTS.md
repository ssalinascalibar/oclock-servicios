# AGENTS.md

## Contexto del proyecto

- Proyecto: Oclock Servicios.
- Web corporativa B2B.
- Landing page estática con secciones para presentar los servicios de la empresa.
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
- `src/pages/`: páginas.
- `src/components/`: componentes.
- `src/layouts/`: estructura general.
- `src/styles/`: estilos globales e independientes.
- `public/`: recursos estáticos.
- Mantener `index.astro` como página principal.
- Crear archivos, carpetas y componentes únicamente cuando sean necesarios.
- Evitar arquitecturas complejas, abstracciones y sobreingeniería.

## Código y buenas prácticas

- Escribir código simple, legible y mantenible.
- Utilizar una indentación de 4 espacios.
- Utilizar nombres descriptivos en inglés.
- Preferir funciones flecha cuando corresponda.
- Utilizar comentarios breves en español cuando sean necesarios.
- Evitar código duplicado, muerto o innecesario.
- Priorizar las funcionalidades nativas de Astro.
- Utilizar JavaScript únicamente cuando exista una necesidad real de interactividad.

## CSS y diseño

### Organización de estilos

- Utilizar exclusivamente CSS puro.
- Mantener separados el HTML y el CSS.
- Cada componente Astro debe tener su propio archivo CSS independiente dentro de `src/styles/`.
- Importar el archivo CSS correspondiente desde cada componente.
- No utilizar bloques `<style>` dentro de los componentes Astro.
- No utilizar estilos inline.
- Centralizar variables, reset, tipografía y estilos compartidos en `global.css`.
- Mantener los estilos específicos en el archivo correspondiente a cada componente.

### Convenciones CSS

- Utilizar una indentación de 4 espacios.
- Utilizar nombres de clases descriptivos en inglés y formato kebab-case.
- Utilizar nombres simples como `.hero-title`, `.hero-content` y `.hero-button`.
- No utilizar la metodología BEM.
- Priorizar clases sobre identificadores para aplicar estilos.
- Reservar los identificadores principalmente para navegación y enlaces internos.
- Utilizar propiedades CSS tradicionales cuando sean suficientes.
- Preferir margin, padding, width, height y sus propiedades tradicionales frente a alternativas lógicas innecesarias.
- Mantener una línea en blanco entre bloques de selectores.
- Evitar selectores excesivamente complejos.
- Evitar propiedades y estilos duplicados.
- No utilizar `!important`.

### Shorthand

- Priorizar propiedades shorthand cuando mejoren la legibilidad.
- Utilizar shorthand para margin, padding, border, background y flex cuando corresponda.
- Utilizar la menor cantidad de valores necesarios.
- Utilizar propiedades individuales cuando solo sea necesario modificar un valor específico.
- Evitar shorthand cuando pueda sobrescribir otras propiedades involuntariamente.

### Unidades y dimensiones CSS

- Utilizar rem para márgenes, padding y gap.
- Utilizar rem para tamaños generales de fuente.
- Utilizar em para iconos y textos que deban escalar respecto a su componente.
- Utilizar porcentajes para dimensiones relativas al contenedor.
- Utilizar vh, svh y vw cuando el diseño lo requiera.
- Utilizar fr para distribuciones mediante CSS Grid.
- Utilizar px para bordes, detalles visuales y dimensiones que requieran precisión.
- Utilizar siempre px para los breakpoints de las media queries.
- Utilizar line-height sin unidad.
- Priorizar dimensiones flexibles, max-width y min-height.
- Evitar dimensiones fijas innecesarias.
- Evitar funciones como clamp(), calc(), min() y max() cuando exista una solución más sencilla.
- Respetar el tamaño de fuente raíz definido por el navegador.
- No forzar el uso de una unidad cuando exista una alternativa más adecuada.
- Priorizar porcentajes (%) para width, max-width y dimensiones relativas al contenedor.
- Utilizar rem principalmente para márgenes, padding, gap y tamaños generales de fuente.
- No utilizar unidades ch, ex, cap, ic, lh ni rlh.
- Utilizar dimensiones fijas únicamente cuando sean necesarias.

### Distribución y responsive

- Priorizar Flexbox para distribuciones unidimensionales.
- Utilizar CSS Grid para distribuciones de filas y columnas.
- Trabajar con un enfoque mobile-first.
- Definir primero los estilos base para dispositivos móviles.
- Mantener las media queries al final de cada archivo CSS.
- Ordenar los breakpoints de menor a mayor.
- Utilizar la sintaxis `@media screen and (min-width: 768px)`.
- Sobrescribir únicamente las propiedades que necesiten cambiar.
- No repetir propiedades ya declaradas en los estilos base.
- No crear breakpoints innecesarios.

Breakpoints de referencia:

- 576px: móviles grandes.
- 768px: tablets.
- 992px: portátiles.
- 1200px: escritorio.
- 1440px: pantallas grandes.

Utilizar únicamente los breakpoints que requiera cada componente.

### Paleta corporativa de referencia

- Primario: #14263D
- Acento: #2873B9
- Fondo secundario: #F2F5F8
- Blanco: #FFFFFF
- Texto: #273441

Utilizar las variables existentes en `global.css`.

No modificar la paleta ni la identidad visual sin autorización.

### Criterio general de CSS

Priorizar CSS tradicional, sencillo, consistente y fácil de mantener.

No utilizar técnicas avanzadas únicamente por modernizar o sofisticar el código. Mantener la consistencia con las convenciones establecidas.

## Contenido

- No inventar información.
- No inventar servicios, clientes, estadísticas, testimonios, certificaciones ni datos de contacto.
- No inventar rutas de archivos, imágenes o recursos inexistentes.
- Utilizar exclusivamente información proporcionada o aprobada por el desarrollador.
- Identificar claramente los contenidos provisionales.
- Solicitar información cuando sea necesaria.
- Mantener los contenidos en español de Chile.
- Utilizar la web de referencia como inspiración, sin copiar sus contenidos ni identidad corporativa.

## SEO, accesibilidad y rendimiento

- Utilizar HTML semántico.
- Mantener una jerarquía correcta de encabezados.
- Optimizar imágenes y recursos.
- Incorporar textos alternativos descriptivos.
- Mantener un contraste adecuado.
- Garantizar una navegación accesible mediante teclado.
- Evitar JavaScript y dependencias innecesarias.
- Priorizar la velocidad de carga.

## Metodología de trabajo

- Trabajar de manera incremental.
- Ejecutar exclusivamente las tareas solicitadas.
- Revisar los archivos relevantes antes de modificarlos.
- Consultar únicamente los archivos relacionados con la tarea.
- No analizar todo el repositorio innecesariamente.
- No modificar código ajeno a la solicitud.
- Respetar el código previamente aprobado.
- No avanzar a otras etapas sin autorización.
- Mantener respuestas breves y precisas.
- No repetir código innecesariamente en las respuestas.
- Informar los archivos creados, modificados o eliminados.
- Informar las decisiones técnicas relevantes.

## Autorizaciones obligatorias

Solicitar autorización explícita antes de:

- Modificar la arquitectura.
- Instalar, eliminar o actualizar dependencias.
- Modificar configuraciones críticas.
- Modificar los estilos globales fuera del alcance solicitado.
- Eliminar archivos existentes.
- Realizar refactorizaciones generales.
- Cambiar la identidad visual.
- Alterar funcionalidades previamente aprobadas.
- Ejecutar comandos destructivos.
- Realizar commits, push o cambios de ramas.
- Publicar o desplegar el sitio.

Ante cualquier cambio crítico o decisión no definida, consultar primero al desarrollador.

## Verificación

- Verificar los cambios realizados.
- Ejecutar `npm run build` cuando corresponda.
- Informar errores y limitaciones.
- No ocultar problemas detectados.
- No afirmar que algo funciona sin haberlo verificado.

Documentación oficial de Astro: https://docs.astro.build/