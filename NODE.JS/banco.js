//configurando o Sequelize para o projeto funcionar 
const Sequelize = require('sequelize')//importando os recursos do sequelize mesma coisa q o express faz
//criando outra constanste são diferenteschamando um pacote do sequelize , tudo isso tem haver com o banco de dados
const sequelize = new Sequelize("exemplo","root", "", {//nome banco, root padrao banco e senha
    host:'localhost',
    dialect:'mysql'
})

//vendo de o bd funciona
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Falha ao se conectar:" + erro)
})

//construindo uma entidade
const Agendamentos = sequelize.define('agendamentos',{
    nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING

    },
    telefone: {
        type: Sequelize.STRING

    },
    cpf:{
        type: Sequelize.STRING
    },
    data: {
        type: Sequelize.STRING

    },
    hora: {
        type: Sequelize.STRING

    }

})

//constante com a função de sync p sincronizar o que esta em agendamentos
//Agendamentos.sync({force: true})//força o banco a criar a entidade

Agendamentos.create({
    nome: 'Mariana',
    email: 'mariana@gmail.com',
    telefone:'119999999',
    cpf:'1234567890',
    data:'2025-02-27',
    hora:'20:00'
})
