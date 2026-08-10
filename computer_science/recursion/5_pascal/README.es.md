# Ejercicio 5 - pascal

El triángulo de Pascal se modela de la siguiente manera:
- La primera fila es `1`.
- Se puede considerar que cada fila tiene un `0` oculto a cada lado. Así, la primera fila también podría escribirse como `0, 1, 0`
- Para obtener la siguiente fila, tomamos cada número y lo sumamos con su vecino de la derecha.

Primera fila: `[1]`
Segunda fila: `[0+1, 1+0]` o simplemente `[1, 1]`
Tercera fila: `[0+1, 1+1, 1+0]` o simplemente `[1, 2, 1]`
Cuarta fila: `[0+1, 1+2, 2+1, 1+0]` o simplemente `[1, 3, 3, 1]`
...

El patrón continúa indefinidamente.

Tu tarea es crear una función *recursiva*, `pascal`, que reciba una entrada `n` y devuelva la `n`-ésima fila del triángulo de Pascal como un array de números.

Por ejemplo, `pascal(3)` debería devolver `[1, 2, 1]`.
