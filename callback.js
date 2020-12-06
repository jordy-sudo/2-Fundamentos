// Concepto básico de callback
setTimeout(function () { 
    console.log('Hola chic@s!'); 
}, 2000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Samatha',
        id: id
    }
    if (id === 20) {
        callback(`El usurio ${id} no existe`);
    }else{
        callback(null, usuario);
    }
}

getUsuarioById(10, (err, usuario) => {
    if (err){
        console.log("ERROR:", err);
        return;
    }
    console.log("Usuario de BDD: ", usuario);
});

