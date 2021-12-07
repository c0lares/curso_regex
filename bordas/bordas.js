const texto = 'Romário era um excelente jogador\n, mas hoje é um politico questionador'

console.log(texto.match(/r/gi))
console.log(texto.match(/^r/gi))
console.log(texto.match(/r$/gi))

console.log(texto.match(/^r.*r$/gi))//problema do dotall
console.log(texto.match(/^r[.*\n*]r$/gi))//nao é possivel usar quantificadores em conjuntos