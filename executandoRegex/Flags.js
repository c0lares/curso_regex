//É possivel achar as flags na ferramenta do 
//navegador regex101 
//Flag g=Global
//Flag i=Ignorte case
// |

const texto = 'Carlos assinou o abaixo-assinado.'
console.log(texto.match(/C|ab/)) //selecionando ou a letra c ou "ab"
console.log(texto.match(/c|ab/)) // Nao ira encontrar o c, pois o c esta minusculo
console.log(texto.match(/c|ab/i)) //Agora ignora o case, como nao tem a falg g ele para no primeiro
console.log(texto.match(/C|ab/gi)) //Agora ignora o case e procura globalmente