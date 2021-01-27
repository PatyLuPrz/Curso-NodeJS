const fs = require('fs');
// const os = require('os');

// console.log(os.platform());
// console.log(os.release());
// console.log("Free mem: ",os.freemem()," Bytes");
// console.log("Total mem: ",os.totalmem()," Bytes");

fs.writeFile('./texto.txt',"linea uno",function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Archivo creado");
    }
});

console.log("Ultima linea de codigo");