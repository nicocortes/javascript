let numero1 = Number (prompt("Ingrese el primer numero: "))
let numero2 = Number (prompt("Ingrese el segundo numero: "))

//Operaciones
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let resta1 = numero2 - numero1;
let producto = numero1 * numero2;
let  division = numero1 / numero2;
let division1 = numero2 / numero1;
let mayorigual = numero1 >= numero2;
let igual = numero1 == numero2;


//Mensajes por consola - método 1

/*
console.log("El resultado de  " + numero1 + " + " + numero2  + " es: " + suma)
console.log("El resultado de  " + numero1 + " - " + numero2  + " es: " + resta)
console.log("El resultado de  " + numero2 + " - " + numero1  + " es: " + resta1)
console.log("El resultado de  " + numero1 + " * " + numero2  + " es: " + producto)
console.log("El resultado de  " + numero1 + " / " + numero2  + " es: " + division)
console.log("El resultado de  " + numero2 + " / " + numero1  + " es: " + division1)
console.log("¿" + numero1 + " es mayor o igual que " + numero2  + "? : " + mayorigual)
console.log("¿" + numero1 + " es igual que " + numero2  + "? : " + igual) 
*/

//Mensajes por consola - método 2 - Template string
console.log(`Los numeros elegidos son ${numero1} y ${numero2}`)
console.log("******************************************")
console.log(`El resultado de ${numero1} + ${numero2} es: ${suma}`)
console.log(`El resultado de ${numero1} -  ${numero2} es: ${resta}`)
console.log(`El resultado de ${numero2} - ${numero1} es: ${resta1}`)
console.log(`El resultado de ${numero1} * ${numero2} es: ${producto}`)
console.log(`El resultado de ${numero1} / ${numero2} es: ${division}`)
console.log(`El resultado de ${numero2} / ${numero1} es: ${division1}`)
console.log(`¿${numero1} es mayor o igual que ${numero2}? : ${mayorigual}`)
console.log(`¿${numero1} es igual que ${numero2}? : ${igual}`)
