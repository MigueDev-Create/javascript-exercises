# Ejercicio 03 - numberChecker

Modifica el código para que devuelva `true` cuando el número sea mayor o igual que 10, y `false` si es menor que 10.

Actualmente, el código devuelve `true` si el número es `6`, y en caso contrario devuelve `false`.

También te habrás dado cuenta de que en este ejercicio hay varios tests (en el archivo `numberChecker.spec.js`). Solo el primer test está activado actualmente. Así que, después de asegurarte de que el primer test pasa, activa el siguiente eliminando la parte `.skip` de la función `test.skip()`. Suele ser más fácil si activas solo un test a la vez y luego editas tu código para que pase. Puedes seguir activándolos de uno en uno hasta que, poco a poco pero con seguridad, pasen todos.

Si al ejecutar `npm test numberChecker.spec.js` obtienes resultados similares a los que se muestran abajo (indicando que hay tests omitidos), asegúrate de haber activado el resto de tests, tal y como se describe en las instrucciones anteriores:

```
Test Suites: 1 passed, 1 total
Tests:       3 skipped, 1 passed, 4 total
```

## Pistas

- Solo necesitas editar la línea 2.
- Consulta la documentación sobre los operadores de comparación en JavaScript como referencia rápida.
