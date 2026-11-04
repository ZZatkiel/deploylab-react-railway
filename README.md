# DeployLab React - GitHub + Railway

Proyecto de practica con React + Vite, **sin `server.js` ni backend propio**.

## Requisitos

- Node.js 20.19+ o 22.12+
- Git, GitHub y Railway

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abrir la URL que muestra Vite (normalmente `http://localhost:5173`).

## Tests y build

```bash
npm test
npm run build
```

La carpeta `dist/` es la salida compilada de Vite y no se sube a GitHub.

## Subir a GitHub

Crea un repositorio vacio `deploylab-react-railway`. Luego:

```bash
git init -b main
git add .
git commit -m "Iniciar DeployLab con React"
git remote add origin https://github.com/TU_USUARIO/deploylab-react-railway.git
git push -u origin main
git switch -c staging
git push -u origin staging
```

## Railway - un proyecto, dos entornos

1. Crea proyecto desde el repositorio de GitHub; despliega `main` en `production`.
2. En la configuracion de Build, usa `npm run build` (Railpack suele detectarlo).
3. En la configuracion de Deploy, configura Start Command: `serve --single --listen $PORT dist`.
4. En Variables de production agrega `VITE_APP_ENV=production` y aplica el despliegue. Es una variable de **compilacion**: cambiarla implica reconstruir el frontend.
5. Genera un dominio publico.
6. Crea environment `staging` y vincula el servicio a la rama `staging`.
7. Cambia su variable a `VITE_APP_ENV=staging`, aplica los cambios y genera otro dominio.

`serve` es un servidor web estatico ligero que entrega `dist/` y maneja rutas SPA. No implementa API ni logica de backend.

## Ejercicio de ramas y PR

```bash
git switch staging
git pull origin staging
git switch -c feature/mensaje
```

Cambia el texto del `h2` en `src/App.jsx`, luego:

```bash
npm test
npm run build
git add .
git commit -m "Cambiar mensaje principal"
git push -u origin feature/mensaje
```

En GitHub, crea PR `feature/mensaje` -> `staging`; merge; verifica Railway Staging. Luego PR `staging` -> `main`; merge; verifica Railway Production.

## Importante

- `import.meta.env.VITE_APP_ENV` se inyecta en **build time**, no runtime.
- No pongas secretos en `VITE_...`: quedan visibles en el bundle del navegador.
- No subas `node_modules` ni `dist` al repositorio.
