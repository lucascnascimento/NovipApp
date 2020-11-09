function geraTodasAsChaves(n, resposta) {
  var arrayDeChaves = [];
  for (var i = 0; i < 1 << n; i++) {
    var tempChave = [];
    for (var j = 0; j < n; j++) {
      tempChave.push(i & (1 << j) ? 'A' : 'B');
    }
    const chaveString = tempChave.join('');
    if (chaveString === resposta) {
      console.log(`Resposta na posição: ${i}`);
    }
    arrayDeChaves.push(chaveString);
  }
  return arrayDeChaves;
}

const res = geraTodasAsChaves(10, 'ABAABBABAB');
res.map((r) => console.log(r));
