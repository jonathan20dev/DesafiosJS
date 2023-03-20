/*
En este desafío debes utilizar promesas para enviar un correo electrónico.

La función sendEmail recibe tres parámetros: email, subject y body, los cuales son necesarios para enviar un correo. Deberás implementar la lógica necesaria para usar promesas y enviar el correo después de 2 segundos.

En caso de faltar algún dato, deberás lanzar un error con el mensaje indicando que faltan campos para enviar el correo. Recuerda utilizar la siguiente sintaxis:

reject(new Error(message));

También recuerda que para usar setInterval o setTimeout debes usar el namespace de window de la siguiente manera para que las pruebas pasen correctamente.

window.setTimeout(() => {
  // Código aquí
}, 1000);


sendEmail(
    "test@mail.com",
    "Nuevo reto",
    "Únete a los 30 días de JS"
)
.then(result => console.log(result))

*/

function sendEmail(email, subject, body) {
    return new Promise((resolve, reject) => {
        if (email && subject && body) {
            setTimeout(() => {
                resolve({email, subject, body})
            }, 2000);
        } else {
            reject(new Error("Error, algun valor no es string"));
        }
    })
}

sendEmail(
    "test@mail.com",
    "Nuevo reto",
    "Javascript with python [PyScript]"
)
    .then(result => console.log(result))