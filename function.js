

// Function Declaretion
function saludar(nombre) {
    console.log(`Bienvenida: ${nombre}`);
}
saludar('Cintia Mercedes');

// Function Expression
const cliente = function(nombreCliente='Patrica', actividad= 'Aprender PHP') {
    console.log(`Mostrando datos del cliente: ${nombreCliente} Su actividad es: ${actividad}` )
}
cliente('Ernesto Ledesma', 'Aprender JS');
cliente('Julita Piccar', 'Aprender TypeScript');
cliente();

