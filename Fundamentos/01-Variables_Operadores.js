//variable
//Espacio de memoria donde guardo datos

//Palabras reservadas. Son palabras reservadas de Javascript, las cuales no podemos usarlas

var nombre = "Eugenio";
let apellido = "Perez";

//Es mejor usar let porque no deja iniciar una variable que ya esta declarada. Al usar var, podemos pisar la variable decalarado

//Constantes
const pi = 3.14;

//Tipos de datos
//String

let cliente = "Fabrizio";

//Number
let numero1 = 34.262;
let numero2 = 34.15;
let numero3 = -24;

//Booleano
let comprar = true;
let comer = false;

//Null
let billetera = null;

//Undefined
let caja;

//Array
let arreglo = ["Pablo", 689, true];

//Object
let persona = {
  nombre: "Jose",
  apellido: "Mandarino",
  edad: "33",
};

//Operadores
//Aritmeticos

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let resto = numero1 % numero2;

//Unitarios
++numero1;
--numero1;

//Relacionales
console.log(numero1 == numero2);
console.log(numero1 >= numero2);
console.log(numero1 <= numero2);
console.log(numero1 != numero2);

console.log("El resultado de la suma es " + suma);


//Negacion
let verdadero = true;
console.log(!verdadero)

let valor =  prompt( "Ingrse su nombre" );

