const texto = `Lista telefônica:
- (11) 98756-1212
-98765-4321 ...`

const regexTelefone = /\(?\d{0,2}\)?\s?\d{5}-\d{4}/g
console.log(texto.match(regexTelefone))