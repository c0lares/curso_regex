const texto = '.$+*?-'

console.log(texto.match(/[.$+*?-]/g))//nao precisa de escape
console.log(texto.match(/[$-?]/g))// isso é um intervalo

//NAO É UM INTERVALO:
console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))