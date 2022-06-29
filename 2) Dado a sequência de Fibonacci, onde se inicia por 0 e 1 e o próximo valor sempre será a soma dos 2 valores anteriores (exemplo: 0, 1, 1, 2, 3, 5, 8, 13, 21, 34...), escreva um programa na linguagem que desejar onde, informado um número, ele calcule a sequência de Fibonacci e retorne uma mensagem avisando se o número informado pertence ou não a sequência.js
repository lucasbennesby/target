var fibonacci = [];
function geraFibonacci(number) {
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  for (var i = 2; i < number; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }

  comparaNumero(number);
}

function comparaNumero(number) {
  if (fibonacci.includes(number)) {
    console.log("O numero pertence a sequencia de Fibonacci");
  } else {
    console.log("O numero nao pertence a sequencia de Fibonacci");
  }
}
geraFibonacci(13);
