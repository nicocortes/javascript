//Tarea 1
let nombre = prompt("Tarea 1.Ingrsesa tu nombre: ")
console.log("------ Tarea 1 -------")
console.log(`Tu nombre capitalizado es: ${nombre.charAt(0).toUpperCase() + nombre.substr(1).toLowerCase()}`)



//Tarea 2
let numero1 = prompt("Tarea 2. El programa te pedirá 3 números. Ingresa el primero:")
let numero2 = prompt("Ingresa el segundo: ")
let numero3 = prompt("Ingresa el tercero: ")
console.log("------ Tarea 2 -------")
console.log(`Los numeros ingresados son \n ${numero1} \n ${numero2} \n ${numero3}`)

if (numero1 == numero2 && numero1 == numero3) {
    console.log("Los números ingresados son iguales, no se puede calcular mayor o menor.")
} else {
    console.log(`El mayor es: ${Math.max(numero1, numero2, numero3)}`)
    console.log(`El menor es: ${Math.min(numero1, numero2, numero3)}`)
}
console.log(`La raíz cuadrada de ${numero2} es ${Math.sqrt(numero2)}`)



//Tarea 3
let n1 = parseFloat(prompt("Tarea 3. El Programa te pedirá 2 números. Ingresa el primero:"))
let n2 = parseFloat(prompt("Ingresa el segundo:"))
console.log("------ Tarea 3 -------")
if (n1 > n2) {
    console.log(`${n1} es mayor que ${n2}, la suma de ambos es: ${n1 + n2}`)
} 

if (n1 < n2) {
    console.log(`${n1} es menor que ${n2}, la resta de ${n2} - ${n1} es ${n2 - n1}`)
}

if (n1 == n2) {
    console.log(`${n1} es igual a ${n2}, el producto de ambos es ${n2 * n1}`)
}