const texto = 'João é calmo, mas no transito fica nervoso.'

// positive lookahead
console.log(texto.match(/[\wÁ-ú]+(?=,)/gi))
console.log(texto.match(/[\wÁ-ú]+(?=\.)/gi))
console.log(texto.match(/[\wÁ-ú]+(?=, mas)/gi))

// negative lookahead
console.log(texto.match(/[\wÁ-ú]+(?!,)/gi))
console.log(texto.match(/[\wÁ-ú]+[\s\.](?!,)/gi))