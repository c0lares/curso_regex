const texto = `
Os e-mails dos convidados são:
  - fulano@cod3r.com.br
  - xico@gmail.com
  - joao@empresa.info.br
  - maria_silva@registro.br
  - rafa.sampaio@yahoo.com
  - fulano+de+tal@escola.ninja.br
`

console.log(texto.match(/[\w\.\+]+@\w+\.\w+(\.\w{2})?/gi))