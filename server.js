const fs = require("fs")
const express = require("express")
const { sendEmail } = require("./sendEmail.js")
const bodyParser = require("body-parser")

const server = express()

server.use((req, res, next) => {
  console.log(`${req.method} "${req.path}"`)
  next()
})
server.use(bodyParser.urlencoded({ extended: true }))
server.use(express.static(__dirname + "/dist"))

server.post("/novo-contato", function(req, res) {
  sendEmail(
    ["tonozzisite@gmail.com"],
    "Novo contato adquirido pelo site",
    `
      <ul>
        <li>Nome: ${req.body.nome}</li>
        <li>Email: ${req.body.email}</li>
        <li>Telefone: ${req.body.telefone}</li>
        <li>Mensagem: ${req.body.mensagem}</li>
      </ul>
    `
  )
    .then(() => res.status(200).send("OK"))
    .catch(() => res.status(500).send("Deu merda no envio do email"))
})

server.get("*", function(req, res, next) {
  res.status(404).sendFile(__dirname + "/dist/error.html")
})

server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000")
})

/*const server = http.createServer((req,res)=> {
    if(req.url == "/") { 
        res.end("<h1> foi1 </h1>")

    }
    if(req.url =="/contato"){
       
    }
    res.end("<h1> Sem respota para a URL</h1>")
})

server.listen(3000, "localhost", () => {
    console.log("funcionou")

})*/
