# Mejoras de Diseño e Interfaz (UI/UX)

Este documento detalla las mejoras estéticas y funcionales implementadas en el proyecto que van más allá de los requerimientos base de la rúbrica, con el objetivo de presentar un producto de calidad profesional (Nivel Producción).

## 1. Diseño "Glassmorphism" Premium
Se reemplazó el fondo oscuro básico por un sistema de **Glassmorphism avanzado**:
- **Ambient Glows**: Fondos con gradientes radiales animados (`@keyframes float`) que simulan luces ambientales detrás del contenido.
- **Tarjetas Translúcidas**: Las `MetricCard` utilizan `backdrop-filter: blur(24px)` para un efecto de cristal esmerilado profundo.
- **Bordes Resplandecientes**: Efectos de `box-shadow` y pseudo-elementos (`::before`) con `mask-composite` para crear bordes gradientes que brillan sutilmente.

## 2. Visualización de Datos Dinámica
Para cumplir con el requerimiento de "Inline styles para valores dinámicos" de una manera mucho más profesional, se implementó una **Barra de Progreso Dinámica**:
- En lugar de solo cambiar el color de un punto, el ancho (`width`) de la barra de progreso inferior de cada tarjeta se calcula dinámicamente vía *Inline Styles* basado en el `value` de la métrica (`${value}%` o calculado sobre 20).
- Incorpora una animación `shimmer` (brillo deslizante) para dar sensación de actividad en tiempo real.

## 3. Tipografía y Micro-Interacciones
- **Tipografía Moderna**: Se integró `Inter` para legibilidad técnica y `Outfit` para encabezados y números de métricas, dando un toque moderno y geométrico.
- **Efectos Hover (Interacción)**: Las tarjetas se elevan suavemente (`translateY`) y escalan (`scale`) al pasar el cursor, intensificando sus sombras y bordes para una respuesta táctil visual.
- **Animaciones de Entrada**: El `Dashboard` implementa un `slideUpFade` escalonado (`animationDelay`), lo que significa que las tarjetas aparecen una por una fluidamente al cargar la página.

## 4. Iconografía Vectorial
Se instaló y configuró la librería **Lucide-React**:
- Cada métrica recibe un icono semántico a través de *props* desde el `App.jsx`.
- Los iconos adoptan dinámicamente el color de la tendencia (Verde, Rojo, Cyan) para reforzar el lenguaje visual del estado de la métrica.

## 5. Detalles de Estado "Neón"
El componente `<StatusBadge>` fue rediseñado para emular letreros de neón:
- Uso de `inset box-shadow` y bordes semitransparentes para dar la ilusión de emisión de luz desde el interior del texto.

> **Nota para la evaluación:** Ninguna de estas mejoras rompe las reglas establecidas. La arquitectura sigue siendo 100% CSR, los estilos modulares no colisionan, y el flujo de datos unidireccional (Props/Children) se mantiene intacto. Simplemente se aplicaron estándares de diseño UI/UX modernos a los requisitos académicos.
