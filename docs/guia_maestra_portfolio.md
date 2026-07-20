# Guía maestra — Portfolio maahcodev

## 1. Identidad del proyecto

- Nombre: Portfolio maahcodev
- Propietario: Marcos Alvarez
- Marca profesional: maahcodev
- Tipo: Portfolio profesional personal
- Estado: publicado y en proceso de mejora
- Etapa actual: Portfolio V2

## 2. Entorno local

- Equipo de desarrollo: Ubuntu Matrix
- Sistema operativo: Ubuntu
- Usuario local: maahtrix
- Ruta de trabajo:

```text
/home/maahtrix/Downloads/portfolio_html_css-main
```

La carpeta fue descargada inicialmente como ZIP desde GitHub. Por eso no incluía la carpeta oculta `.git`.

El historial Git fue restaurado el 19 de julio de 2026 mediante:

1. `git init --initial-branch=main`
2. Conexión del remoto `origin`
3. Descarga de `origin/main`
4. Restauración de la referencia local
5. Validación del historial y del estado limpio

## 3. Git y GitHub

- Cuenta: `macodev-82`
- Repositorio: `https://github.com/macodev-82/portfolio_html_css`
- Remoto: `https://github.com/macodev-82/portfolio_html_css.git`
- Rama principal: `main`
- Rama de trabajo V2: `feat/portfolio-v2`
- Último commit antes de V2:

```text
e035ede Actualiza URL al dominio personalizado maahcodev.dev
```

### Reglas Git

- No modificar directamente `main`.
- Trabajar en ramas separadas.
- Validar antes de crear commits.
- No usar `git add .`.
- Agregar únicamente archivos revisados.
- Revisar `git diff` antes de cada commit.
- Usar mensajes de commit claros y en inglés.
- Publicar mediante Pull Request después de validar.

## 4. Dominio

- Dominio: `maahcodev.dev`
- URL pública: `https://maahcodev.dev`
- Registrador: Namecheap
- Fecha de vencimiento: 22 de mayo de 2027
- Renovación automática: pendiente de verificar
- Método de pago: pendiente de verificar
- Proveedor DNS actual: pendiente de verificar

### Función de Namecheap

Namecheap administra la propiedad y renovación del dominio. También puede administrar los registros DNS si estos siguen configurados allí.

## 5. Hosting y despliegue

- Hosting: Vercel
- URL anterior de Vercel: `https://portfolio-html-css-ecru.vercel.app`
- Dominio conectado: `https://maahcodev.dev`

Flujo general:

```text
Ubuntu Matrix
    ↓
Git local
    ↓
GitHub
    ↓
Vercel
    ↓
maahcodev.dev
```

### Función de Vercel

- Publicar el portfolio.
- Desplegar cambios provenientes de GitHub.
- Servir los archivos del sitio.
- Conectar el dominio personalizado.
- Mantener disponible la versión pública.

## 6. Estructura inicial

```text
portfolio_html_css-main/
├── css/
│   └── styles.css
├── docs/
│   └── guia_maestra_portfolio.md
├── js/
│   └── main.js
├── .gitignore
└── index.html
```

## 7. Tecnologías actuales

- HTML
- CSS
- JavaScript vanilla
- Git
- GitHub
- Vercel
- Formspree

## 8. Funcionalidades actuales

- Navegación principal.
- Menú responsive.
- Sección Hero.
- Sección Sobre mí.
- Trayectoria profesional.
- Sección de habilidades.
- Sección de proyectos.
- Formulario de contacto.
- Interfaz en español e inglés.
- Animación de escritura.
- Animaciones al hacer scroll.
- Navegación activa según la sección visible.
- Botón para volver arriba.
- Metadatos sociales básicos.
- Dominio personalizado.

## 9. Hallazgos iniciales

### Prioridad alta

- Conflicto CSS confirmado en `.nav-toggle`: dentro de `@media (max-width: 768px)` se establece `display: flex`, pero una regla posterior con la misma especificidad vuelve a establecer `display: none`.
- Se confirmaron cuatro enlaces provisionales con `href="#"` en la sección de proyectos.
- Los proyectos de ejemplo todavía deben sustituirse por proyectos reales.
- Los enlaces externos deben validarse uno por uno.
- El enlace real de LinkedIn debe confirmarse.
- El formulario de contacto con Formspree debe probarse de extremo a extremo.

### Prioridad media

- Se confirmó un problema semántico: los elementos `<ul class="proyecto-tecnologias">` contienen `<span>` como hijos directos; deben contener elementos `<li>`.
- Añadir capturas reales de proyectos.
- Mejorar el Hero.
- Actualizar la presentación profesional.
- Mejorar SEO.
- Añadir `canonical`.
- Añadir `og:image` y `twitter:image`.

### Accesibilidad

- Añadir compatibilidad con `prefers-reduced-motion`.
- Validar navegación por teclado.
- Revisar contraste.
- Revisar etiquetas accesibles.
- Validar responsive en varios tamaños.

## 10. Objetivo de Portfolio V2

Crear un portfolio profesional que muestre con claridad:

- Quién es maahcodev.
- Qué tecnologías utiliza.
- Qué proyectos reales ha construido.
- Qué problemas puede resolver.
- Cómo trabaja con Git, GitHub, Linux y desarrollo web.
- Cómo pueden contactarlo clientes, colaboradores y reclutadores.

La presentación debe ser honesta con el nivel actual sin describirlo como principiante absoluto cuando ya existe experiencia práctica demostrable.

## 11. Política universal de documentación

Se documentará:

- Cada comando ejecutado.
- Cada archivo creado.
- Cada archivo modificado.
- El motivo de cada cambio.
- El resultado esperado.
- El resultado real.
- Los errores encontrados.
- Las soluciones aplicadas.
- Las validaciones técnicas.
- Las validaciones visuales.
- Las ramas utilizadas.
- Los commits creados.
- Los Pull Requests.
- Los cambios en GitHub.
- Los cambios en Vercel.
- Los cambios en Namecheap.
- La configuración del dominio.
- La configuración DNS.
- Las decisiones de diseño.
- Las mejoras de accesibilidad.
- Las mejoras de rendimiento.
- Las mejoras SEO.

La documentación debe permitir retomar el proyecto meses después sin perder el contexto.

## 12. Regla universal de ejecución guiada

Para este proyecto y todos los proyectos futuros:

1. Se entregará un solo paso de ejecución cada vez.
2. Después de un bloque de comandos se esperará el resultado.
3. Si el bloque funciona, no se repetirá.
4. Si aparece un error, se corregirá solo la parte afectada.
5. No se mezclarán fases o secciones distintas.
6. Antes de editar un archivo se localizará el bloque exacto.
7. Se validará cada cambio antes de continuar.
8. Todo error, solución y resultado quedará documentado.
9. Se indicará exactamente desde qué encabezado hasta qué línea debe copiarse la salida.
10. No se usarán bloques interactivos propensos a quedarse esperando un cierre sin una razón necesaria.

## 13. Registro de trabajo

### 19 de julio de 2026

- Se confirmó que el portfolio está alojado en Vercel.
- Se confirmó que el dominio es `maahcodev.dev`.
- Se confirmó que el dominio está registrado mediante Namecheap.
- Se confirmó que vence el 22 de mayo de 2027.
- Se identificó el repositorio oficial.
- Se descargó una copia ZIP.
- Se detectó la ausencia de `.git`.
- Se restauró correctamente el repositorio local.
- Se conectó el remoto `origin`.
- Se recuperó el historial de `main`.
- Se confirmó que `main` estaba limpio.
- Se creó la rama `feat/portfolio-v2`.
- Se creó la carpeta `docs`.
- Dos intentos de creación de la guía quedaron detenidos por el uso incorrecto de un bloque `EOF`.
- Se cancelaron esos procesos con `Ctrl + C`.
- Se verificó que la rama seguía limpia y que la guía todavía no existía.
- Se sustituyó el método anterior por una creación no interactiva mediante Base64.
- Se validó la guía maestra como archivo UTF-8 de 260 líneas y sin errores de formato Git.
- Se creó el commit `4cdbb52 docs: add portfolio v2 master guide`.
- Se auditó el código sin modificarlo.
- Se confirmó el conflicto CSS de `.nav-toggle` que puede ocultar el menú móvil.
- Se localizaron cuatro enlaces provisionales con `href="#"`.
- Se confirmó la estructura semántica incorrecta de las listas de tecnologías.

## 14. Próximo paso

Realizar una auditoría técnica local completa antes de modificar el diseño:

1. Validar HTML.
2. Revisar CSS.
3. Revisar JavaScript.
4. Comprobar enlaces.
5. Identificar problemas responsive.
6. Identificar problemas de accesibilidad.
7. Documentar los resultados.
8. Corregir primero el problema técnico de mayor prioridad.
