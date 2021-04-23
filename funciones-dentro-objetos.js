

// Metodos o funciones dentro de un Objeto

const persona = {
    nombre: 'Joaquin',
    trabajo: 'Backend developer',
    edad: 21,
    musicaRock: true,
    mostrarInformacion() {
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`);
    }
}
persona.mostrarInformacion();