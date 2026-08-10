# Ejercicio 11 - tempConversion

Escribe dos funciones que conviertan temperaturas de Fahrenheit a Celsius, y viceversa:

```javascript
convertToCelsius(32) // de fahrenheit a celsius, debería devolver 0

convertToFahrenheit(0) // de celsius a fahrenheit, debería devolver 32
```

Como somos humanos, queremos que la temperatura resultante se redondee a un decimal: es decir, `convertToCelsius(100)` debería devolver `37.8` y no `37.77777777777778`.

Este ejercicio te pide crear más de una función, así que la sección `module.exports` del archivo javascript principal tiene un aspecto algo distinto esta vez. No hay de qué preocuparse: simplemente estamos empaquetando ambas funciones en un único objeto para exportarlas.

## Pistas

- Puedes encontrar las fórmulas correspondientes en [Wikipedia](https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature).
- Intenta averiguar por ti mismo en Internet cómo redondear un número a 1 decimal en JavaScript. Si te cuesta, echa un vistazo [aquí](https://stackoverflow.com/q/7342957/5433628).
