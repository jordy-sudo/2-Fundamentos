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

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(obj => obj.id === id);

    if(empleadoDB){
        callback(null, empleadoDB);
    }else{
        callback(`No existe el empleado con id ${id}`);
    }
}

let getSalario = (empleado, callback) => {
    let salarioBD = salarios.find(obj => obj.id === empleado.id);

    if (salarioBD){
        callback(null, {nombre: empleado.nombre, sueldo:salarioBD.salario});
    }else{
        callback(`No se encontro un salario para ${empleado.nombre}`);
    }

}

getEmpleado(1, (err, empleado) => {
    if (err){
        return console.log("ERROR:",err);
    }

    //console.log("Empleado hallado:", empelado.nombre);
    getSalario(empleado, (err, respuesta) => {
        if (err){
            return console.log("ERROR:", err);
        }
        console.log(`El salario de ${respuesta.nombre} es $ ${respuesta.sueldo}`);
    });
});