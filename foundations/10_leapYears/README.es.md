# Ejercicio 10 - leapYears

Crea una función que determine si un año dado es bisiesto o no. Los años bisiestos se determinan según las siguientes reglas:

> Los años bisiestos son los años divisibles entre cuatro (como 1984 y 2004). Sin embargo, los años divisibles entre 100 no son bisiestos (como 1800 y 1900), salvo que sean divisibles entre 400 (como 1600 y 2000, que sí fueron bisiestos). (Sí, todo esto es bastante confuso)
>
> -- [Learn to Program](https://pine.fm/LearnToProgram/chap_06.html) de Chris Pine

```javascript
leapYears(2000); // es bisiesto: devuelve true
leapYears(1985); // no es bisiesto: devuelve false
```

¿Sigues con dudas? Consulta este [desglose de los años bisiestos](https://www.calendar-12.com/leap_year) con ejemplos.

## Pistas

- usa una sentencia `if` y `&&` para asegurarte de que todas las condiciones se cumplen correctamente
