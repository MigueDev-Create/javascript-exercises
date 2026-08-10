# Ejercicio 13 - Cifrado César

Implementa el legendario cifrado César:

> En criptografía, el cifrado César, también conocido como cifrado de desplazamiento, código de César o desplazamiento de César, es una de las técnicas de cifrado más simples y conocidas. Es un tipo de cifrado por sustitución en el que cada letra del texto original se reemplaza por otra letra situada un número fijo de posiciones más adelante en el alfabeto. Por ejemplo, con un desplazamiento a la izquierda de 3, la D se reemplazaría por la A, la E se convertiría en B, y así sucesivamente. El método recibe su nombre de Julio César, que lo usaba en su correspondencia privada.

Pista: Puede que necesites convertir letras a sus valores unicode. ¡Asegúrate de leer la documentación!

escribe una función que reciba una cadena a codificar y un factor de desplazamiento, y devuelva la cadena codificada:

```javascript
caesar('A', 1) // simplemente desplaza la letra en 1: devuelve 'B'
```

el cifrado debe conservar las mayúsculas:
```javascript
caesar('Hey', 5) // devuelve 'Mjd'
```

_no_ debe desplazar los signos de puntuación:
```javascript
caesar('Hello, World!', 5) // devuelve 'Mjqqt, Btwqi!'
```

el desplazamiento debe dar la vuelta al alfabeto:
```javascript
caesar('Z', 1) // devuelve 'A'
```

los números negativos también deben funcionar:
```javascript
caesar('Mjqqt, Btwqi!', -5) // devuelve 'Hello, World!'
```
