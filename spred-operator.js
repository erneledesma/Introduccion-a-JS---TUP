
/// Spred operator ...

let lenguajes = ['JavaScript', 'PHP', 'Python'];
let frameworks = ['RectJS', 'Laravel', 'Django'];
let bd = ['MongoDb', 'Casandra', 'MySql'];

// let combinacion = lenguajes.concat(frameworks);

let combinacion = [ ...lenguajes, ...frameworks , ...bd ]

console.log(combinacion);