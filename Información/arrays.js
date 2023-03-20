//From
let saludo = Array.from('Hola');
console.log(saludo) //[ 'H', 'o', 'l', 'a' ]

//(n).fill()
let ceros = new Array(5).fill(0);
console.log(ceros) //[ 0, 0, 0, 0, 0 ]

//isArray()
console.log(Array.isArray(ceros)) //true

//copy con nueva instancia
const copiedCeros = new Array(ceros)
console.log(copiedCeros === ceros) //false

//slice
const numeros = [0,1,2,3,4,5,6,7]
console.log(numeros.slice(3, numeros.length))

//concat [union]
console.log(numeros.concat([8,9,10])) 

//spread operator
console.log([...numeros,1,2,3,4])

//copia de objetos
const obj = { a: { b: true } }
const deepCopy = structuredClone(obj)

//=========================================================//
//                 Arrays Bidimensionales
//=========================================================//

const matrix = [];
matrix[0] = [1, 2, 3];
matrix[1] = [4, 5, 6];
matrix[2] = [7, 8, 9];

console.log(matrix);