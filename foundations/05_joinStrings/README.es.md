# Ejercicio 05 - joinStrings

## Paso 1: Aprender

Primero, mira el código de ejemplo en `joinStrings-example.js`. Intenta predecir cuál será la salida del `console.log`. Cuando estés listo, ejecuta el test:

```bash
npm test joinStrings-example.spec.js
```

Si has visto algo inesperado, no dudes en repasar el código de nuevo.

## Paso 2: Hacer

Después de entender el código de ejemplo, recrearás el fragmento por tu cuenta siguiendo estas instrucciones (en `joinStrings.js`):

1. Crea 4 variables: `firstName`, `lastName`, `thisYear` y `birthYear`
1. Crea una 5ª variable, `greeting`, construida a partir de las 4 anteriores
- Debe contener un saludo que incluya el nombre completo y la edad de la persona

Nota: Para que los tests pasen, tendrás que usar los valores y la redacción exactos (tal y como se describe en `joinStrings.js`). Si los tests fallan, mira el mensaje de tu terminal y revisa los espacios, las mayúsculas y la puntuación.

## Paso 3: Limpiar

Editarás tu código para hacerlo más legible siguiendo estas instrucciones:

1. Crea 2 variables nuevas: `fullName` y `age`
   - NO escribas simplemente el nombre completo y la edad en las nuevas variables
   - En su lugar, usa las variables ya existentes, con los cálculos que ahora están dentro de `greeting`
1. Edita la cadena `greeting` para que use `fullName` y `age` en lugar de las otras 4 variables. `greeting` debería quedar más o menos así:

   ```js
   "Hello! My name is " + fullName
   ```

Ejecuta todos los tests una última vez para asegurarte de que la salida no ha cambiado:

```bash
npm test joinStrings.spec.js
```

## Pistas

- Consulta la documentación sobre variables en JavaScript como referencia rápida.
- Vuelve a la [lección de Variables y Operadores](https://www.theodinproject.com/lessons/foundations-variables-and-operators) si sigues atascado.
