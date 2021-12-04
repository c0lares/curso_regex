const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46'

console.log(texto.match(/\d{1,2}/g))
console.log(texto.match(/\d{2}/g))
console.log(texto.match(/\d{1,}/g))
//=
console.log(texto.match(/\d+/g))

console.log(texto.match(/\w{7}/g))//Nao vai pegar milhoes pois õ nao faz parte do \w
console.log(texto.match(/[\wõ]{7}/g))//Vai pegar pois esta considerando ou õ ou \w

//no futuro, bordas:
console.log(texto.match(/\b\d{1,2}\b/g))
console.log(texto.match(/\b[\wõ]{7}\b/g))