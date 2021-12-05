const texto1 = 'O José simao é muito engracado... heheehehehehehehe'
console.log(texto1.match(/(he)+/g))
console.log(texto1.match(/he+/g))

const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag'
console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w{3,6}(\.\w{2})?/g))