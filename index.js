// const https = require('http');

// https.createServer(function(request,response){
//     response.writeHead(200,{'content-type':'text/html'});
//     response.write('<h1>Hola mundo!</h1>');
//     response.end();
// }).listen(3000);

var http = require('http');
var server = http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type':'text/html; charset=UTF-8'});
    response.end('<h1>Hola, mundo! :)</h1>');
})

// Se arranca el servidor
server.listen(3000,function(){
    console.log('Servidor iniciado en 127.0.0.1:3000');
});

