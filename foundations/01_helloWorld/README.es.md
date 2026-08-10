# Ejercicio 01 - Hello World

El objetivo principal de este ejercicio es guiarte por el proceso de ejecutar los tests y asegurarte de que todo está configurado y funcionando correctamente.

En este directorio encontrarás otros 2 archivos:

1. `helloWorld.js`
1. `helloWorld.spec.js`

Esta estructura debería ser similar en todos los ejercicios. El archivo javascript normal es donde escribirás tu código, y el archivo `spec` contiene los tests que verifican que tu código funciona.

Veamos primero el archivo spec:

```javascript
const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
```

En la parte superior del archivo usamos `require()` para importar el código del archivo javascript (`helloWorld.js`) y así poder probarlo.

El siguiente bloque (`describe()`) es el cuerpo del test. Básicamente, lo único que hace es ejecutar tu código y comprobar si la salida es correcta. La función `test()` describe en lenguaje natural lo que debería ocurrir y luego incluye la función `expect()`. Para este ejemplo tan sencillo debería resultar bastante fácil de leer.

Por ahora no necesitas preocuparte de cómo escribir tests, pero deberías intentar familiarizarte lo suficiente con la sintaxis como para entender qué te piden los tests. Adelante, ejecuta los tests escribiendo `npm test helloWorld.spec.js` en la terminal y observa cómo falla. La salida de ese comando debería decirte exactamente qué falló en tu código. En este caso, ejecutar la función `helloWorld()` debería devolver la frase 'Hello, World!' pero en su lugar devuelve una cadena vacía...

así que veamos el archivo javascript:

```javascript
const helloWorld = function() {
  return ''
}

module.exports = helloWorld;
```

En este archivo tenemos una función sencilla llamada helloWorld que devuelve una cadena vacía... que es exactamente de lo que se quejaba nuestro test. El `module.exports` de la última línea es la forma de exportar la función para que pueda importarse con `require()` en el archivo spec.

Adelante, comprueba si puedes hacer que el test pase editando el valor de retorno de la función y ejecutando de nuevo el archivo de tests.

Por si acaso, y para que no haya confusión a estas alturas: el test te está diciendo que ejecutar la función `helloWorld` debe devolver la frase `Hello, World!`. Aquí la puntuación y las mayúsculas importan, así que revísalo si el test sigue sin pasar.

Este es el aspecto que debería tener la función final:

```javascript
const helloWorld = function() {
  return 'Hello, World!'
}

module.exports = helloWorld;
```

En general, hemos preparado estos tests de forma que solo tengas que actualizar o escribir el código que se está probando. No deberías tener que preocuparte por importar o exportar nada en esta etapa... así que ignora esa parte del código y escribe lo necesario para que los tests pasen.
