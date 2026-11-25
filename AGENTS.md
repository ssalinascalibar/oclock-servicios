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
- `src/styles/`: estilos globales.
- `public/`: recursos estáticos.
- Crear archivos y componentes únicamente cuando sean necesarios.
- Evitar arquitecturas complejas, abstracciones y sobreingeniería.
- Mantener `index.astro` como página principal.

## Código

- Escribir código simple, legible y mantenible.
- Utilizar nombres descriptivos en inglés.
- Preferir funciones flecha cuando corresponda.
- Utilizar comentarios breves en español cuando sean necesarios.
- Evitar código duplicado y código innecesario.
- Priorizar las funcionalidades nativas de Astro.
- Utilizar JavaScript únicamente cuando exista una necesidad de interactividad.

## CSS y diseño

- Utilizar exclusivamente CSS puro.
- Priorizar Flexbox y CSS Grid.
- Mantener separados el HTML y el CSS.
- Cada componente Astro debe tener su propio archivo CSS independiente dentro de `src/styles/`.
- Importar el archivo CSS correspondiente desde el componente.
- No utilizar bloques `<style>` dentro de los componentes Astro.
- Centralizar las variables, el reset, la tipografía y los estilos compartidos en `global.css`.
- Utilizar nombres de clases descriptivos y específicos de cada componente para evitar conflictos entre estilos.
- Mantener las media queries específicas en el archivo CSS correspondiente.
- Priorizar el enfoque mobile-first.
- Escribir CSS simple, legible y mantenible.
- Evitar estilos inline y selectores innecesariamente complejos.
- No utilizar `!important`.

### Unidades y dimensiones CSS

- Utilizar rem para márgenes, padding, gap y tamaños generales de fuente.
- Utilizar em para iconos y elementos que deban escalar respecto a la tipografía del componente.
- Utilizar porcentajes para dimensiones relativas al contenedor cuando corresponda.
- Utilizar fr para la distribución de columnas mediante CSS Grid.
- Utilizar px principalmente para bordes y detalles que requieran precisión.
- Utilizar unidades de viewport cuando el diseño lo requiera.
- Utilizar clamp() para tamaños fluidos cuando aporte valor al diseño responsive.
- Utilizar line-height sin unidad.
- Evitar dimensiones fijas innecesarias.
- Priorizar max-width, min-height y dimensiones flexibles.
- Respetar el tamaño de fuente raíz definido por el navegador.
- No forzar el uso de una unidad cuando exista una alternativa más adecuada.
- Mantener el CSS simple, consistente y legible.

### Paleta corporativa de referencia

- Primario: #14263D
- Acento: #2873B9
- Fondo secundario: #F2F5F8
- Blanco: #FFFFFF
- Texto: #273441

No modificar la identidad visual sin autorización.

## Contenido

- No inventar información.
- No inventar servicios, clientes, estadísticas, testimonios, certificaciones ni datos de contacto.
- Utilizar exclusivamente información proporcionada o aprobada por el desarrollador.
- Solicitar información cuando sea necesaria.
- Mantener los contenidos en español de Chile.
- Utilizar la web de referencia como inspiración, sin copiar su contenido.

## SEO, accesibilidad y rendimiento

- Utilizar HTML semántico y una jerarquía correcta de encabezados.
- Optimizar imágenes y recursos.
- Incorporar textos alternativos descriptivos.
- Mantener un contraste adecuado y navegación accesible.
- Evitar JavaScript y dependencias innecesarias.

## Metodología de trabajo

- Trabajar de manera incremental.
- Ejecutar exclusivamente las tareas solicitadas.
- Consultar únicamente los archivos relacionados con la tarea.
- No modificar código ajeno a la solicitud.
- No avanzar a otras etapas sin autorización.
- Mantener respuestas breves y precisas.
- No repetir código innecesariamente.
- Informar los archivos modificados y las decisiones relevantes.

## Autorizaciones obligatorias

Solicitar autorización explícita antes de:

- Modificar la arquitectura.
- Instalar, eliminar o actualizar dependencias.
- Modificar configuraciones críticas.
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
- No afirmar que algo funciona sin haberlo verificado.

Documentación oficial de Astro: https://docs.astro.build/