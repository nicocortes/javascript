//DESAFIO 1
let texto = prompt('Ingrese un texto para contar vocal:');
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
