# Ejercicio 08 - removeFromArray

Implementa una función que reciba un array y algunos argumentos más, elimine esos argumentos del array y devuelva el array resultante:

```javascript
removeFromArray([1, 2, 3, 4], 3); // debería eliminar el 3 y devolver [1,2,4]
```

A ver si puedes aprovechar algunos métodos incorporados de array en este ejercicio.

## Pistas

El primer test de este ejercicio es bastante fácil, pero hay algunas cosas en las que pensar (o buscar en Google) para los tests posteriores:

- Puedes modificar el array original que se pasa a la función o crear un array nuevo que se devuelva como resultado, pero la función debe devolver el array resultante sea cual sea el enfoque.
- Cómo eliminar un solo elemento de un array
- Cómo manejar múltiples argumentos opcionales en una función de JavaScript
- Para más información, consulta la página de MDN sobre [argumentos de función](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) — baja hasta la parte sobre `Array.from` o el operador de propagación (spread). También puedes consultar la página de MDN sobre [parámetros rest](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
