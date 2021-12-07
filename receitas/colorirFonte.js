const aplicarCor = (txt, reg, cor) => txt.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`)

const files = require('./files.js')
const texto = files.read('codigoFonte.html')

const codeRegex = /<code>[\s\S]*<\/code>/i
let codigo = texto.match(codeRegex)[0]


//Strings
codigo = aplicarCor(codigo, /(\".*\")/g, 'ce9178')

// palavras reservadas
codigo = aplicarCor(codigo, /\b(package|public|class|if|else|static)\b/g, 'd857cf')

//tipos
codigo = aplicarCor(codigo, /\b(void|int)\b/g, '148e2')

//Comentarios de multiplas linhas
codigo = aplicarCor(codigo, /(\/\*[\s\S]*\*\/)/g, '267703')

// comentários de uma linha...
codigo = aplicarCor(codigo, /(\/\/.*?\n)/g, '265603')


const conteudoFinal = texto .replace(codeRegex, codigo)
files.write('codigoFonte.html', conteudoFinal)