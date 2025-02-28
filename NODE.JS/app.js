const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send("Hello World")
})

app.listen(8081, function(){//função sem entrada nenhuma p ver se o servidor esta funcionando
    console.log('Servidor rodando na porta 8081')
})