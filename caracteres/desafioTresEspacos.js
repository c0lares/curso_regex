const texto = 'a   b'
console.log(texto.match(/a...b/)) //apenas bonus, porem nao são tres espacos, sao 3 caracteres
console.log(texto.match(/a   b/))
console.log(texto.match(/a\s\s\sb/))

//no futuro
console.log(texto.match(/a\s+b/))//acha com1 ou mais espacos entre a e b
console.log(texto.match(/a {3}b/))//acha somente com 3 espacos
console.log(texto.match(/a\s{3}b/))//acha somente com 3 espacos
