//---------------- Desafio 1 ------------------------
let textAdd = prompt(
  'Ingresa palabra o frase, para salir presione "Cancelar": '
);
let text = [];

while (textAdd !== null) {
  text.push(textAdd);
  textAdd = prompt('Ingresa palabra o frase, para salir presione "Cancelar": ');
}
console.log(text.join('-'));

//----------------- Desafio 2 ------------------------
let number = parseFloat(
  prompt('Ingrese un número. Presione "Cancelar" para salir.')
);
let total = 0;

if (isNaN(number)) {
  while (number) {
    total = total + number;
    number = parseFloat(
      prompt('Ingrese un número. Presione "Cancelar" para salir.')
    );
  }
  console.log(`La suma total de los números ingresados es: ${total}`);
}

//----------------- Desafio 3 ------------------------
let texto = prompt('Desafio 2. Ingrese un texto para contar las vocales:');
let vocales = 0;

for (i = 0; i <= texto.length; i++) {
  if (
    texto.charAt(i) === 'a' ||
    texto.charAt(i) === 'e' ||
    texto.charAt(i) === 'i' ||
    texto.charAt(i) === 'o' ||
    texto.charAt(i) === 'u'
  )
    vocales++;
}

console.log(`El numero de vocales es ${vocales}`);
