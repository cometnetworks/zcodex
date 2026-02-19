# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-01-01
### Añadido
- **Landing Page MVP**: Diseño "Dark Mode" futurista con secciones Hero, Problema/Solución, Servicios y Por qué ZCOdex.
- **Navegación**: Navbar responsivo con efectos de vidrio (glassmorphism) y menú móvil animado.
- **Páginas de Soluciones**: Rutas dinámicas (`/soluciones/[slug]`) para 5 servicios principales:
  - Modernización de Legados
  - Desarrollo de Producto Digital (Nuevo)
  - Flujos Agénticos
  - Automatización Inteligente
  - Gobernanza ISO 42001
- **Sección Industrias**: Grid de clientes autorizados filtrados por sector (Fintech, Retail, Energía, etc.).
- **Sección Proceso**: Visualización del método de trabajo en 3 fases (Diagnóstico, Despliegue, Escalamiento).
- **Páginas Legales**:
  - Política de Privacidad (`/privacidad`)
  - Términos y Condiciones (`/terminos`)
  - Certificación ISO 42001 (`/certificacion-iso`)
- **Optimizaciones**:
  - SEO Metadata y OpenGraph tags.
  - Favicon e iconos de Apple configurados (`ZCO-logo.jpg`).
  - Scroll suave (Smooth Scroll) para navegación interna.
  - Indicador de scroll posicionado para no obstruir badges.

### Cambiado
- Actualizado el año de Copyright en el footer a **2026**.
- Reemplazado el placeholder del logo en Navbar y Footer por la imagen oficial de marca.

### Corregido
- Solucionado error de "Server Component" en animaciones Framer Motion agregando la directiva `"use client"`.
- Ajustado el layout en móviles para que las grillas de servicios e industrias se apilen verticalmente (1 columna).
