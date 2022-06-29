function inverteTexto(texto) {
  var textoInverso = [];
  for (var i = texto.length - 1; i >= 0; i--) {
    textoInverso += texto[i];
  }
  console.log(textoInverso);
}

inverteTexto("Lucas");
