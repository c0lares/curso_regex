const texto = '1,2,3,4,5,6,a.b c!d?e[f'

const regex_n_impar = /[02468]/g
console.log(texto.match(regex_n_impar))

const texto2 = 'João não vai passear na moto'
const regexComESemAcento = /n[ãa]./g
console.log(texto2.match(regexComESemAcento))