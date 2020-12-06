/*
let getNombre = async () => {
    throw new Error('No existe el dato solicitado');
    return "Jordy";
}
*/

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Jordy");
        }, 2000);
    });
}

let getApellido = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Quilachamin");
        }, 1000);
    });
}

/*
let getNombre = () => {
    return new Promise ((resolve, reject) => {
        resolve("Rodrigo");
    });
}
*/

let saludar = async() => {
    let nombre = "";
    nombre = await getNombre();
    nombre += " " + await getApellido();
    return `Hola ${nombre}`;
}

let saludar2 = async() => {
    let nombre = "";
    getNombre().then(resultado => {
        console.log(resultado);
    });

    getApellido().then(resultado => {
        console.log(resultado);
    });
    return `Hola ${nombre}`;
}

/*
getNombre().then(mensaje => {
    console.log(mensaje);
}).catch(e => {
    console.log(e.message);
});
*/


saludar().then(mensaje => {
    console.log(mensaje);
});


saludar2().then((mensaje) => {
    console.log(mensaje);
});

/*
Promise.all([getApellido(), getNombre()]).then((resultado) => {
    console.log(resultado);
});
*/