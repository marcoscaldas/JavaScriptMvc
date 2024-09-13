const express = require('express');
const clienteController = require('./controllers/ClienteController');

const path = require('path');
const app = express()
const PORT = 3000;

app.use(express.json());

app.get('/api/clientes', clienteController.getAllClients);

app.post('/api/clientes', clienteController.createNewClient);


app.listen(PORT, function(){
    console.log('Servidor na porta ' + PORT);
});