const express = require('express');
const colors = require('colors');

const server = express();

server.listen(3000,() =>{
    console.log('Server on port 3000'.red);
});

server.get('/',(req,res)=>{
    res.send('<h1>Hola mundo! esto es Express y NodeJS</<h1>');
});