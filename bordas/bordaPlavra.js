const texto = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

console.log(texto.match(/\bdia\w+/gi))//seleciona palavras que comecam com dia
console.log(texto.match(/\w+dia\b/gi))//seleciona palavras que terminam com dia
console.log(texto.match(/\w+dia\w+/gi))//seleciona palavras que tem dia no meio
console.log(texto.match(/\bdia\b/gi))//seleciona a palavra dia

const texto2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'//o hifen tem no \b
console.log(texto2.match(/\bdia\b/gi))
console.log(texto2.match(/(\S*)?dia(\S*)?/gi))//a virgula esta entrando, pois n é considerada um espaco
console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi))//a virgula esta entrando, pois n é considerada um espaco