const texto = `Os e-mails dos convidados são:
- fulano@cod3r.com.br
- xico@gmail.com ...`

const regexEmail = /\w+@\w+\.\w+\.?\w+/g

console.log(texto.match(regexEmail))