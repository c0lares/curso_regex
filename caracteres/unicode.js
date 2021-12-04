// no início...
// Um byte (8 bits) - 256 caracteres
// Símbolos, Pontuação, A-Z, a-z, 0-9
// Dois bytes (16 bits) - 65500+ caracteres
// +Símbolos, +Pontuação, A-Z, a-z, 0-9
// Unicode
// Quantidade de Bytes Variável - Expansível
// Suporta mais de 1 Milhão caracteres
// Atualmente tem mais de 100.000 caracteres atribuidos
// https://unicode-table.com/pt/
const texto = 'aآcࡤd'
console.log(texto.match(/\u0622|\u0864/g))//usar o \u para codigo unicode