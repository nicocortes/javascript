//For
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//Tarea - Ingresar la tabla que queremos calcular
let tabla = parseInt(prompt('Ingrese el número de tabla a calcular:'));

if (isNaN(tabla)) {
  console.error('Debe ingresar un número');
} else {
  for (let i = 1; i <= 10; i++) {
    console.log(`${tabla} x ${i} = ${tabla * i}`);
  }
}
//Otra forma con while
let tabla = parseInt(prompt('numero'));
while (tabla) {
  //El valor tabla solo, pregunta si es verdadero o correcto el dato ingresado
  for (let i = 1; i <= 10; i++) {
    console.log(`${tabla} x ${i} = ${tabla * i}`);
  }
  tabla = parseInt(prompt('numero'));
}
