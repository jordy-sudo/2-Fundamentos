let empleados = [
    {
        id: 1,
        nombre: 'Samantha'
    },
    {
        id: 2,
        nombre: 'Kate'
    },
    {
        id: 3,
        nombre: 'Ariel'
    }
];

let salarios = [
    {
        id: 1,
        salario: 600
    },
    {
        id: 2,
        salario: 3000
    }
];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(obj => obj.id === id);

        if(empleadoDB){
            resolve(empleadoDB);
        }else{
            reject(`No existe el empleado con id ${id}`);
        }
    });
}


let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id)

        if (!salarioDB) {
            reject(`No se encontró salario para el empleado ${empleado.nombre}`);
        } else {
            resolve({ nombre: empleado.nombre, salario: salarioDB.salario });
        }

    });
}

/*
getEmpleado(10).then(empleado => {
    getSalario(empleado).then(respuesta => {
        console.log(`El salario de ${respuesta.nombre} es $ ${respuesta.sueldo}`);
    }, (err) => {
        console.log(err);
    })
}, (err) => {
    console.log("ERROR:", err);
});
*/

// Promesas en cascada
getEmpleado(3).then(empleado => {
    return getSalario(empleado);
}).then(respuesta => {
    console.log(`El salario de ${respuesta.nombre} es $ ${respuesta.salario}`);
}).catch(err => {
    console.log(err);
});