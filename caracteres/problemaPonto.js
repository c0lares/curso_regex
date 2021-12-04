const texto = 'Bom\ndia'
console.log(texto.match(/./g))//nao acha o \n
console.log(texto.match(/.../g))
console.log(texto.match(/..../g))//o \n tbm n é reconhecido como 2 caracteres