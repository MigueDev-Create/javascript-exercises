# Ejercicios de JavaScript

Estos ejercicios de JavaScript están pensados para complementar el contenido de JavaScript de [The Odin Project](https://www.theodinproject.com/) (TOP). Solo deberías hacerlos cuando se te indique durante el transcurso del currículo.

> [!IMPORTANT]
> Te animamos a practicar tus habilidades con git haciendo commit de tus cambios y subiéndolos a tu propio fork. Sin embargo, por favor **NO** abras un Pull Request para que tus soluciones se fusionen en este repositorio ni para mostrar tu solución. Si fusionáramos tus cambios, los ejercicios dejarían de estar disponibles tal y como se han pensado para las personas que empiezan, y abrir un PR solo nos genera trabajo adicional, ya que tenemos que cerrarlo sin fusionarlo.

## Contribuir

Si tienes una sugerencia para mejorar un ejercicio, una idea para un ejercicio nuevo, o detectas un problema en alguno, no dudes en abrir una issue después de leer con atención nuestra [guía de contribución](https://github.com/TheOdinProject/javascript-exercises/blob/main/CONTRIBUTING.md).

## Cómo usar estos ejercicios

1. Haz un fork y clona este repositorio. Para aprender a hacer un fork de un repositorio, consulta la documentación de GitHub sobre [cómo hacer fork de un repositorio](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository).
   - Las copias de repositorios en tu máquina se llaman clones. Si necesitas ayuda para clonar en tu entorno local, puedes aprender cómo hacerlo en la documentación de GitHub sobre [clonar un repositorio](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository).
1. **Instalación de npm:** Ya deberías haber instalado npm en nuestra lección [Installing Node.js](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/installing-node-js). Por si necesitas comprobarlo, escribe `npm --version` en tu terminal. Si obtienes `Command 'npm' not found, but can be installed with:`, **no sigas las instrucciones de la terminal** para instalarlo con `apt-get`, ya que esto causa problemas de permisos. En su lugar, **vuelve a la lección de instalación** e instala Node con NVM siguiendo las instrucciones que allí se indican.
1. **Instalación de Jest:** Después de clonar este repositorio en tu máquina local e instalar npm, entra **dentro** del directorio recién creado (`cd javascript-exercises`) y ejecuta `npm install`. Esto instalará Jest y configurará la plataforma de pruebas según nuestra configuración predefinida. (Nota: si recibes avisos de que hay paquetes desactualizados o con vulnerabilidades, puedes ignorarlos sin problema para estos ejercicios).
1. Cada ejercicio incluye lo siguiente:
   - Un archivo markdown con la descripción de la tarea, un archivo JavaScript vacío (o casi vacío) y un conjunto de tests.
   - Un directorio `solutions` que contiene una solución de ejemplo y el mismo archivo de tests con todos los tests activados.

   Para completar un ejercicio, tendrás que ir al directorio del ejercicio con `cd <ruta al archivo>` en la terminal y ejecutar `npm test nombreEjercicio.spec.js`. Por ejemplo, para ir al primer ejercicio de Foundations, "helloWorld", debes hacer `cd foundations/01_helloWorld` y luego ejecutar `npm test helloWorld.spec.js`. Esto debería ejecutar el archivo de tests y mostrarte el resultado. Cuando ejecutes un test por primera vez, fallará. ¡Es a propósito! Debes abrir el archivo del ejercicio y escribir el código necesario para que el test pase.
1. Algunos ejercicios tienen condiciones de test definidas en su archivo spec como `test.skip` en lugar de `test`. Esto es intencionado. Una vez que pasen todos los casos `test`, cambiarás el siguiente `test.skip` a `test` y volverás a probar tu código. Repetirás esto hasta que se cumplan todas las condiciones. **Todos los tests deben pasar a la vez**, y no debería quedar ninguna instancia de `test.skip` en el archivo spec cuando termines un ejercicio.
1. Una vez que completes con éxito un ejercicio, revisa el directorio `solutions` dentro de cada ejercicio.
   - ¡No deberías mirar la solución de un ejercicio hasta que lo hayas terminado!
   - Si tu solución difiere de la de TOP (y aun así cumple los requisitos del ejercicio), no pasa absolutamente nada. La solución proporcionada es solo un ejemplo y siempre hay múltiples enfoques. Si hay partes de la solución de ejemplo que no entiendes, no dudes en preguntar en nuestro Discord.

> [!IMPORTANT]
> No envíes tus soluciones a este repositorio, ya que cualquier PR que lo haga será cerrado sin fusionarse.

> [!NOTE]
> Por la forma en que Jest gestiona los tests fallidos, puede devolver un código de salida 1 si algún test falla. NPM lo interpretará como un error y es posible que veas mensajes `npm ERR!` después de que Jest se ejecute. Puedes ignorarlos, o ejecutar tu test con `npm test nombreEjercicio.spec.js --silent` para suprimir los errores.

El primer ejercicio, `helloWorld`, te guiará por el proceso en detalle.

## Depuración

Para depurar funciones, puedes ejecutar los tests en la terminal del depurador de Visual Studio Code. Puedes abrirla haciendo clic en el icono "Run and Debug" de la izquierda o pulsando <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd>, y luego haciendo clic en JavaScript Debug Terminal. Podrás establecer puntos de interrupción igual que en el depurador de Chrome DevTools. Después puedes ejecutar `npm test nombreEjercicio.spec.js` para ejecutar tu código hasta el punto de interrupción e ir paso a paso por el código según necesites. **NOTA**: Para aprovechar el depurador, **DEBES** ejecutar el script en la terminal del depurador, no en la terminal bash o zsh.
