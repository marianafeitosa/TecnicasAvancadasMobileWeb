//usar o http para acessar o createServer (função que faz a construção do servidor)
var http = require('http')
// cria uma função anonima require chamando response (res)enviando
http.createServer(function(req,res){
    res.end("Mensagem direcionada")

}).listen(8081)//listen é a porta padrao do servidor 8081


//vai mostrar no console
console.log("Servidor está ativo")