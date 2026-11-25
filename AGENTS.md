# AGENTS.md

## 1. Contexto del proyecto

- Proyecto: Oclock Servicios.
- Sitio web corporativo B2B.
- Landing page estática con secciones para presentar los servicios de la empresa.
- Referencia visual: https://ug-transportation.com/
- El diseño debe ser profesional, moderno, responsive y coherente con la identidad corporativa.

## 2. Tecnologías

- Astro como framework principal.
- HTML semántico.
- CSS puro y Bootstrap 5.
- JavaScript puro para interacciones.
- React únicamente con autorización del desarrollador.
- Node.js y npm para desarrollo y compilación.
- HostingPlus para alojamiento estático.

No incorporar backend, bases de datos ni dependencias innecesarias.

## 3. Arquitectura

- Mantener una arquitectura sencilla basada en componentes Astro.
- Utilizar `src/pages/index.astro` como página principal.
- Utilizar `src/components/` para los componentes.
- Utilizar `src/layouts/` para la estructura general.
- Utilizar `src/styles/global.css` para estilos globales.
- Evitar abstracciones, patrones y niveles de carpetas innecesarios.
- Crear componentes y archivos solamente cuando exista una necesidad real.
- No crear páginas adicionales sin autorización.

## 4. Código y buenas prácticas

- Escribir código simple, limpio, legible y mantenible.
- Utilizar nombres descriptivos en inglés para archivos, componentes, variables y funciones.
- Preferir funciones flecha cuando corresponda.
- Utilizar comentarios breves en español cuando sean necesarios.
- Evitar código duplicado, código muerto y sobreingeniería.
- Mantener separadas las responsabilidades de cada componente.
- Priorizar las funcionalidades nativas de Astro.

## 5. CSS y diseño

- Mantener los estilos simples y fáciles de modificar.
- Utilizar variables CSS para colores y valores globales reutilizables.
- Utilizar Bootstrap principalmente para grillas, distribución y diseño responsive.
- Utilizar estilos locales de Astro cuando corresponda.
- No utilizar `!important`.
- No utilizar estilos inline salvo casos justificados.
- Evitar selectores innecesariamente complejos.
- Priorizar un enfoque mobile-first.
- Mantener consistencia visual entre todos los componentes.

Paleta corporativa de referencia:

- Primario: #14263D
- Acento: #2873B9
- Fondo secundario: #F2F5F8
- Blanco: #FFFFFF
- Texto: #273441

No modificar la paleta ni incorporar nuevos colores corporativos sin autorización.

## 6. Contenido

- No inventar información sobre la empresa.
- No inventar servicios, clientes, estadísticas, testimonios, certificaciones ni datos de contacto.
- Utilizar únicamente información proporcionada o aprobada por el desarrollador.
- Consultar cuando falte información necesaria.
- Mantener los contenidos en español de Chile.
- Utilizar la web de referencia como inspiración, sin copiar sus contenidos ni identidad visual.

## 7. SEO, accesibilidad y rendimiento

- Utilizar HTML semántico.
- Mantener una jerarquía correcta de encabezados.
- Optimizar imágenes y recursos.
- Utilizar textos alternativos descriptivos.
- Garantizar un contraste adecuado.
- Evitar JavaScript innecesario.
- Priorizar la velocidad de carga.

## 8. Metodología de trabajo

- Trabajar de manera incremental.
- Ejecutar únicamente las tareas solicitadas.
- Revisar los archivos relevantes antes de modificarlos.
- No analizar todo el repositorio cuando no sea necesario.
- No modificar componentes ajenos a la tarea.
- No avanzar a otra etapa sin autorización.
- No repetir código innecesariamente en las respuestas.
- Mantener respuestas breves y precisas.
- Informar los archivos modificados y las decisiones relevantes.

## 9. Autorizaciones obligatorias

Solicitar autorización explícita antes de:

- Cambiar la arquitectura del proyecto.
- Instalar, eliminar o actualizar dependencias.
- Modificar configuraciones críticas.
- Eliminar archivos existentes.
- Realizar refactorizaciones generales.
- Cambiar la identidad visual.
- Alterar funcionalidades previamente aprobadas.
- Ejecutar comandos destructivos.
- Realizar commits, push o cambios de ramas.
- Publicar o desplegar el proyecto.

No asumir decisiones que corresponden al desarrollador.

## 10. Verificación

- Verificar que los cambios no introduzcan errores.
- Ejecutar `npm run build` cuando corresponda.
- Informar errores y limitaciones sin ocultarlos.
- No afirmar que una implementación funciona si no ha sido verificada.

Para consultar funcionalidades específicas de Astro, utilizar la documentación oficial: https://docs.astro.build/
