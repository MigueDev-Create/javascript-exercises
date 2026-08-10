# Ejercicio 2 - contains

Escribe una función que busque un valor dentro de un objeto anidado. Devuelve true si el objeto contiene ese valor.

Los objetos se comparan por referencia.

Ejemplos:

```javascript
contains({ foo: "foo" }, "bar") // false
contains({ foo: { bar: "bar" } }, "bar") // true
```
