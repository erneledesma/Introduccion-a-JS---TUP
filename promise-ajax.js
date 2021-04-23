
const descargarUsuarios = cantidad => new Promise((resolve, reject) => {

    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    // llamado a la api
    const xhr = new XMLHttpRequest();

    // abrir la conexion
    xhr.open('GET', api, true);

    //on load
    xhr.onload = () => {
        if(xhr.status === 200 ) {
            resolve(JSON.parse(xhr.responseText).results)
        } else {
            reject(Error(xhr.statusText));
        }
    }

    // opcional on error
    xhr.onerror = (error) => reject(error)
    // send
    xhr.send()

});

console.log(descargarUsuarios(50));