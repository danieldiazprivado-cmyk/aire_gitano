# Guía para Actualizar tu Web

¡Felicidades! Tu web ya está conectada automáticamente.
Cada vez que quieras hacer un cambio, sigue estos 3 pasos en tu terminal:

## 1. Haz tus cambios
Edita los archivos HTML, CSS o imágenes como siempre.

## 2. Guarda los cambios en Git
Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
git add .
git commit -m "Descripción breve de tu cambio"
git push
```

**(Ejemplo real):**
`git add .`
`git commit -m "Cambié el color del botón"`
`git push`

## 3. ¡Listo!
Vercel detectará el comando `git push` y actualizará tu web automáticamente en unos segundos. No tienes que entrar a Vercel ni hacer nada más.
