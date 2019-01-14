const fs = require("fs")
const express = require("express")
const { sendEmail } = require("./sendEmail.js")
const bodyParser = require("body-parser")

const PORT = process.env.PORT !== undefined ? parseInt(process.env.PORT) : 3000

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

server.get("/faleconosco", function(req, res, next) {
  res.sendFile(__dirname + "/dist/faleconosco.html")
})

server.get("*", function(req, res, next) {
  res.status(404).sendFile(__dirname + "/dist/error.html")
})

server.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT)
})
