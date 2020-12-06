let nombre = 'Spiderman';
let nombreReal = "Peter Parker";

// let nombreCompleto1 = nombre + " - " + nombreReal;
// let nombreCompleto = `${nombre} - ${nombreReal}`;

// console.log(nombreCompleto);

// console.log(nombreCompleto === nombreCompleto1);

function getNombre(){
        return `${nombre} - ${nombreReal}`;
}

console.log(`El nombre de ${getNombre()}`);