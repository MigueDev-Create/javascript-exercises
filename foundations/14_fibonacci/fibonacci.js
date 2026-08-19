const fibonacci = function (posicion) {
  const numero = Number(posicion)

  if (numero < 0) {
    return "OOPS"
  }

  if (numero === 0) {
    return 0
  }

  let anterior = 0
  let actual = 1

  for (let i = 1; i < numero; i++) {
    const siguiente = anterior + actual
    anterior = actual
    actual = siguiente
  }

  return actual
};

// Do not edit below this line
module.exports = fibonacci;


// ronda 1, siguiente es: 1    1
