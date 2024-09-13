const db = require('../config/db');

const Cliente = {
    getAllClients: async function () {
        try {
            const [rows] = await db.query('SELECT * FROM  cliente');
            return rows;
        }catch(error){
            throw error;
        }
    },

    createNewClient: async function (nome, cpf){
        try{
            const [result] = await db.execute('INSERT INTO CLIENTE(nome, cpf) VALUES(?,?)', [nome, cpf]);
            return { id: result.insertId, nome, cpf};

        }catch(error){
            throw error;
        }

    }

};



module.exports = Cliente;