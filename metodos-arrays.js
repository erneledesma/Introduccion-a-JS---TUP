
// Metodos en arreglos

const dev = [
    {nombre: 'Juan', edad: 23, aprendiendo: 'JS'},
    {nombre: 'Martina', edad: 25, aprendiendo: 'NodeJS'},
    {nombre: 'Rocio', edad: 33, aprendiendo: 'PHP'},
    {nombre: 'Rocio', edad: 28, aprendiendo: 'React'}
]

// console.log(dev);

const mayores = dev.filter( devs => {
    return devs.nombre === 'Rocio' && devs.edad === 28  
});

console.log(mayores);

const martina = dev.find( persona => {
    return persona.nombre === 'Martina'
})

console.log(`Martina esta aprendiendo: ${martina.aprendiendo}`);



