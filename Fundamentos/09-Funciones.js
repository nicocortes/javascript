//Funciones (tareas)
// Funciones declarativas
function mifuncion() {
  console.log('Hola Mundo');
}

let num1 = 34;
let num = 56;

function sumar(x, y) {
  console.log(x + y);
}

function calculadora(num1 = 5, num2 = 10, operacion = '+') {
  if (!num1 || !num2) {
    return 'Falta el valor';
  }

  switch (operacion) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;

    default:
      return 'Operación Inválida';
  }
}

console.log(calculadora());

function cubo(num) {
  return Math.pow(num, 3);
}

let numeros = [23, 45, 2, 67];

function converCubo(array) {
  let numerosAlCubo = [];

  //For... of - Otra forma de iterar, reconoce cuantos elementos tiene el array
  for (let numero of array) {
    numerosAlCubo.push(cubo(numero));
  }
  return numerosAlCubo;
}

//Funciones anónimas
const saludar = function () {
  console.log('Hola pibes');
};

saludar();

//----------- Scope -------------
let heroe = 'Superman';

function saludarHeroe() {
  let heroe = 'Batman';
  console.log(`Bienvenido ${heroe}`);
}
