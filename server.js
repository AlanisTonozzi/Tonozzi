const fs = require('fs')
const express = require('express')

const server = express()

server.use(express.static(__dirname + '/src'))

server.use(function(req, res, next) {
    res.status(404).sendFile(__dirname + "/src/error.html");
  });
  

server.listen(3000, () =>{
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