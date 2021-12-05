const texto =`
Os e-mails dos convidados são:
  - fulano@cod3r.com.br
  - xico@gmail.com
  - joao@empresa.info.br
  - maria_silva@registro.br
  - rafa.sampaio@yahoo.com
`


const regexEmail = /[\w.]+@\w+\.\w+\.?\w+/g
const regexEmail2 = /[\w.]+@\w+\.\w{2,4}/g

console.log(texto.match(regexEmail2))

// no futuro...
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}(\.\w{2})?/g))