const express = require('express')//pro express funcionar 
const app = express()
const handlebars = require('express-handlebars').engine//pro handlebars funcionar
const bodyParser = require("body-parser")    
const post = require('./models/post')//post é o diretorio principal


app.engine('handlebars', handlebars({defaultLayout: 'main'}))//o main é a matriz, nesse caso é "main.handlebars"
app.set('view engine', 'handlebars')


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json)

//chama a url , rota que vai apontar pro arquivo em html
app.get("/", function(req, res){//req=require res=response 
    res.render("primeira_pagina")// usando o res pq quer enviar a mensagem pro servidor 
})

app.listen(8081, function(){// 8081 porta pro servidor funcionar 
    console.log('Servidor Ativo!')//verifica se o servidor está ativo 
})