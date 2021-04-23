
// Promise o Promesas

const aplicarDescuento = new Promise((resolve, reject ) => {
    setTimeout( () => {
        let descuento = true;

        if(descuento) {
            resolve('Descuento fue aplicado..!')
        } else {
            reject('No se pudo aplicar el descuento')
        }

    }, 3000);
});

aplicarDescuento.then( resultado => {
    console.log(resultado);
})