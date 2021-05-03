//Redondear un numero hacia abajo
console.log(Math.floor(45.89))

//Redondear un numero hacia arriba
console.log(Math.round(45.89))

//Obtener el maximo de una lista de numeros
console.log(`El numero maximo es: ${Math.max(56.5,45,90,5)}`)

//Obtener el mínimo
console.log(`El numero maximo es: ${Math.min(56.5,45,90,5)}`)

//Obtener un entero
let numero = 67.464654
console.log(parseInt(numero))

//Obtener un decimal
let decimal = 84.6351
console.log(parseFloat(decimal))

//Elevar el numero a una potencia
let base = numero
let exponente = 3
console.log(`El numero ${base} elevado a la potencia ${exponente} es de ${Math.pow(base, exponente)}`)

//Calcucal raiz cuadrada
console.log(Math.sqrt(64))

//Numero aleatorio
console.log(Math.round(Math.random() * 50))

//Obtener numero con dos decimales
decimal = parseFloat(decimal)
console.log(Math.round(decimal * 100 ) / 100)

console.log(decimal.toFixed(2))  //Unicamente devuelve string