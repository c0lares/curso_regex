const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOO!'
const texto2 = 'There is a big fog in NYC'

const regex = /fogo+/gi
console.log(texto1.match(regex))
console.log(texto2.match(regex))

const texto3 = 'Os numeros: 0123456789.'
console.log(texto3.match(/\d/gi)) 
console.log(texto3.match(/\d+/gi)) // Os quantificadores sao gulosos
//os cquantificaodrespegam o numero n de ocorrencias no que foi passado