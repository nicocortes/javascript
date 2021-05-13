//Callbacks - Son funciones que se envian como parámetros y se ejecuan después de un método

let numeros = [2, 5, 6, 12, 24];

let numerosOrdenados = numeros.sort(function (a, b) {
  return a - b;
});

console.log(numerosOrdenados.reverse());

//Métodos de arreglos
//Filter
let pares = numeros.filter(function (num) {
  return num % 2 === 0;
});

//Find
let alumnos = ['Lucas', 'Pablo', 'Fabrizio', 'Jorge'];

alumnos.find(function (alumno) {
  return alumno === 'Lucas';
});

//Map
let numerosDobles = numeros.map(function (num) {
  return num * 2;
});
