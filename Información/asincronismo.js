//Cuando se resuleva promise
//con [then] se multiplica el valor obtenido

function wait(ms) {
    return new Promise((resolve, reject) => {
        if (ms < 0) {
            reject(new Error("El número de milisegundos no puede ser negativo"));
        } else {
            setTimeout(() => {
                const seconds = ms / 1000
                resolve(seconds);
            }, ms);
        }
    });
}

// ejemplo de uso
wait(-2000)
    .then((seconds) => {
        console.log(`Han pasado ${seconds} segundos`);
    })
    .catch((error) => {
        console.error(error.message);
        // El número de milisegundos no puede ser negativo
    });

