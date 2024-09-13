const mysql = require('mysql2');

//configurae a conexao com o banco
const connection = mysql.createConnection({
    host:'127.0.0.1',
    user: 'root',
    password:'SENHA',
    database:'mvc',
    port:3302
    
});

//conectar com o banco de dados
connection.connect(function(err){
if(err){
    console.error("Erro de conexão: " + err.stack)
    return;     }

    console.log("Conectado com ID " + connection.threadId);
});

module.exports = connection.promise();
