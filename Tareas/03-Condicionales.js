//****************** Tarea 1 ***********************
let num1 = parseFloat(
  prompt(
    'Tarea 1. El programa necesita que ingrese 2 números. Ingrese el primero:'
  )
);
let num2 = parseFloat(prompt('Ingrese el segundo número:'));

if (num1 > num2) {
  console.log(
    `${num1} es mayor que ${num2}. La suma de ambos es ${num1 + num2}`
  );
} else if (num1 < num2) {
  console.log(
    `${num1} es menor que ${num2}. La resta de ${num2} - ${num1} es igual a ${
      num2 - num1
    }`
  );
} else if (num1 === num2) {
  console.log(
    `Los números ingresados son iguales. La multiplicación de ambos es ${
      num1 * num2
    }`
  );
} else {
  console.error('No ha ingresado un número');
}

//**************** Tarea 2 *****************************
let number1 = parseFloat(
  prompt('Tarea 2. El programa necesita 2 números. Ingrese el primero:')
);
let number2 = parseFloat(prompt('Ingrese el segundo:'));
let operacion = prompt('Ingrese una operación a realizar (+, -, *, /):');

if (isNaN(number1)) {
  number1 = 0;
}

if (isNaN(number2)) {
  number2 = 0;
}

switch (operacion) {
  case '+':
    console.log(
      `El resultado de ${number1} + ${number2} es ${number1 + number2}`
    );
    break;
  case '-':
    console.log(
      `El resultado de ${number1} - ${number2} es ${number1 - number2}`
    );
    console.log(
      `El resultado de ${number2} - ${number1} es ${number2 - number1}`
    );
    break;
  case '*':
    console.log(
      `El resultado de ${number1} * ${number2} es ${number1 * number2}`
    );
    break;
  case '/':
    if (number1 === 0 && number2 !== 0) {
      console.log(
        `El resultado de ${number1} / ${number2} es ${number1 / number2}`
      );
      console.log(`La división ${number2} / ${number1} no está definida`);
    } else if (number2 === 0 && number1 !== 0) {
      console.log(
        `El resultado de ${number2} / ${number1} es ${number2 / number1}`
      );
      console.log(`La división ${number1} / ${number2} no está definida`);
    } else {
      console.log(`La división ${number1} / ${number2} no está definida`);
    }
    break;

  default:
    console.error(`No ha ingresado una operación válida.`);
    break;
}
