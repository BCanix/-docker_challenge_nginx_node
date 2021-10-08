const express = require('express');
const server = express();
const port = 3000;
const controller = require('./controller/people.controller');

server.get('/', controller.getPeople);

server.listen(port, ()=> {
    console.log(`Servidor rodando na porta: ${port}`);
});