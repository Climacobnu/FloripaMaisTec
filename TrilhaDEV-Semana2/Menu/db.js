// npm install sequelize express
//npm install mysql2

const Sequilize = require('sequelize')
const sequelize = new Sequilize('teste', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
})

// module.exports = db;

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro) {
    console.log("Falha ao se conectar: "+erro)
})


