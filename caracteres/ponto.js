// . é um coringa, ele pode significar qualquer caractere
// Porem apenas um caractere

const texto = '1,2,3,4,5,6,7,8,9,0'
console.log(texto.match(/1.2/g))
console.log(texto.match(/1..2/g))
console.log(texto.match(/1..,/g))//QUALQUER CARACTERE

const texto2 = '1X2,3,4,5,6,7,8,9,0'
console.log(texto2.match(/1.2/g))

const notas= '8.3,7.1,8.8,10.0'
console.log(notas.match(/8../g))//tambem substitui o proprio ponto literal
console.log(notas.match(/.\../g))//nao é o ideal pois nao pega o 10
console.log(notas.match(/.\..|..\../g))