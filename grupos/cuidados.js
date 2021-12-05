const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABCabc'
console.log(texto.match(/[(abc)]/gi))//() não é tradato como metacaractere
console.log(texto.match(/([abc])/gi))//um conjunto dentro do grupo é valido
console.log(texto.match(/(abc)+/gi))
console.log(texto.match(/(abc)/gi))// nao usar grupos sem necessidade
