const ClienteModel = require('../models/ClienteModel');

const clienteController ={
    getAllClients: async function (req, res) {
        try{
            const clients = await ClienteModel.getAllClients();
            res.status(200).json(clients);
            
        }catch(error){
            console.error("Erro ao obter lista de clientes:" + error);
            res.status(500).json(
                { error: "Erro ao obter lista de clientes"             
             });
        }
    },
    
    createNewClient: async( req, res)=>{
        const {nome, cpf} = req.body;
        try{
            if(!nome || !cpf){
                return res.status(400).json({ error: 'Nome e CPF são Obrigatórios'});
            }

            const newClient = await ClienteModel.createNewClient(nome, cpf);
            res.status(201).json(newClient);

        }catch(error){
            console.error("Erro ao criar novo cliente ", error);
            res.status(500).json({error: "Erro ao criar novo cliente"});
        }
    }

}








module.exports = clienteController;