const texto = 'Hipermercado supermercado minimercado mercado'
console.log(texto.match(/(hiper|super|mini)?mercado/gi))

//usando grupos aninhados:
console.log(texto.match(/((hi|su)per|mini)?mercado/gi))