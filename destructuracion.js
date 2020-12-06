let superman = {
    nombre: 'Clark',
    apellido: 'Ken',
    poder: 'Volar',
    getNombre : function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
};

console.log(superman.getNombre());

let nom = superman.nombre;
let ape = superman.apellido;
let pod = superman.poder;

console.log('nombre:', nom);

// Destructuración
let {nombre: primerNombre, apellido, poder} = superman;

console.log(primerNombre, apellido, poder);

// Creando una referencia al mismo objeto
let superman2 = superman
superman.nombre = "Juan"
console.log(superman.nombre, superman2.nombre);

// Copiando objetos
let superman3 = {...superman}
superman.nombre = "Pepe"
console.log(superman.nombre, superman2.nombre, superman3.nombre);
