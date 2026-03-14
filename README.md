# Portafolio Grace | Senior Frontend Architect

Arquitectura monolítica construida con **Vite**, **TypeScript Nativo**, **Arquitectura de Componentes** y una de las interfaces de usuario monocromáticas y adaptativas más limpias, guiada por los principios SOLID.

## 🚀 Instalación y Despliegue (Local)

Para cualquier desarrollador que clone este repositorio, el proceso para levantar el entorno de desarrollo es casi inmediato, gracias a que no subimos dependencias ni binarios (revisar \`.gitignore\`).

1. **Instalar Dependencias**
   Asegúrate de tener [Node.js](https://nodejs.org/) instalado. Al abrir la terminal en la raíz del proyecto, ejecuta:
   ```bash
   npm i
   ```
   *Esto instalará Vite, TypeScript y todos los paquetes enumerados en el `package.json`.*

2. **Levantar Servidor de Desarrollo Rápido (HMR)**
   ```bash
   npm run dev
   ```
   *El servidor local generalmente se abrirá en `http://localhost:5173/`.*

## ☁️ Compilación y Despliegue en Producción (Firebase)

La aplicación está conectada directamente al Hosting de Firebase. No necesitas hacer un comando de `build` manual y luego desplegar, todo está centralizado.

Para compilar el TypeScript más reciente, minificar los archivos (generando la carpeta `/dist`) y subir a internet el portafolio, usa directamente:

```bash
npm run deploy
```

*(Si es la primera vez que clonas el repositorio en una máquina nueva y planeas desplegarlo a TU cuenta personal de Firebase, recuerda ejecutar `npx firebase-tools login` para autenticarte primero).*
