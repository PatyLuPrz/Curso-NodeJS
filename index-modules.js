const fs = require('fs');
const os = require('os');

// MODULO OS



console.log(os.platform());
console.log(os.release());
console.log("Free mem: ",os.freemem()," Bytes");
console.log("Total mem: ",os.totalmem()," Bytes");

/// MODULO FS

fs.writeFile('./texto.txt',"linea uno",function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Archivo creado");
    }
});

console.log("Ultima linea de codigo");

fs.readFile('./texto.txt',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})