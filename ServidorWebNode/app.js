const express = require("express")//  ta usando uma constanste nao é mutavel requerindo o pacote express
const app = express ()//criando uma segunda contanste "app"  carrregando ele nessa constanste td que for usar esta dentro do app 
 

app.get("/bemvindo", function(req, res){
    res.send("Seja bem vindo ao Node.js")//req require res response usando o res pq quer enviar a mensagem pro servidor 
})


app.get("/contato", function(req, res){
    res.send("Página de Contato")
})
app.get("/", function(req,res){//rota vai apontar pro arquivo html
    res.sendFile(__dirname + "/html/index.html") // _dirname localiza o diretorio que o arquivo app.js se encontra que se chama "ServidorWebNode"
})
app.get("/produtos/:item/:quantidade", function(req, res){ //esses : é p definir  variavel
    res.send("Item: " + req.params.item + "<br>Quantidade:" + req.params.quantidade)// res envia e na rota dinamica consegue criar mais de um item(variaveis) vai aparecer o item 
})

app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081")//função listen é p construsção do servidor web direcionando p porta 8081 padrão
 })