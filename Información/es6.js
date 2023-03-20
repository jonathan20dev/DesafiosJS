class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}
const persona = new Persona("Jonathan", 22);
persona.saludar(); // Output: "Hola, mi nombre es Juan y tengo 30 años."

//Template literals
const nombre = "Jonatha"
const edad = "22"
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`)

//Arrow functions
const numeros = [1,2,3,4,5]
const dobles = numeros.map(el => el*2);
console.log(dobles)

//Spread operator
const nnumeros = [1,2,3]
const nuevosNumeros = [...nnumeros, 4,5,6] //Aplana el array nnumeros
console.log(nuevosNumeros)

//Destructuring- "objects"
const humano = {nombre1: "jonathan mendoza", edad1: 22};
const {nombre1, edad1} = humano;
console.log(nombre1, edad1)

//find [rtn obj]
const altArray = [1,2,3,4,5]
console.log(altArray.find(n => n===3))

//Promesas
const miPromesa = new Promise((resolve, reject) => {
    //console.log("miPromesa")
})
miPromesa.finally(() => {console.log("Promesa finalizada")})
//-------------------------------------------------------
try {
    //code
} catch (error) {
    console.log(error)
}