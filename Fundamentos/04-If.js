//Estructura de control - If...Else
let num = parseInt(prompt("Ingrese un número"));

if (isNaN(num)) {
  console.error("Ingrese un número"); //¿Este valor no es un número?
} else {
  if (num % 2 === 0) {
    console.log("El número es par");
  } else {
    console.warn("El número no es par"); //Warn sirve para dar un mensaje de alerta
  }

  if (num === 10) {
    console.log("El número es igual a 10");
  } else if (num > 10) {
    console.log("El número es mayor a 10");
  } else if (num !== 10) {
    console.log(`El valor ${num} es distinto de 10`);
  } else {
    console.log("El número es menor a 10");
  }
}

//Programa Fiesta - Solo para mayores de 18 edad >= 18
let edad = parseInt(prompt("Ingrese su edad"));
let tutor = false;

if (edad >= 18) {
  console.log("Bienvienido a la JODA!!!");
} else if (tutor === true) {
  console.log("Bienvenidos a la JODA!!!. No se separe de su tutor");
} else {
  console.log("Salga de aqui papa");
}

//Otra forma de hacerlo
if (edad < 18 && tutor === false) {
  console.error("Salga de aqui papa");
} else if (edad >= 18 || tutor === true) {
  console.log("Bienvienido a la JODA!!!");
}
