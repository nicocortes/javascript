let nombre = "Eugenio";
let apellido = "Gonzalez";
let frase = "         Bienvenido a la clase     ";

console.log(nombre, apellido);
console.log(nombre + "  " + apellido);

//Temple String
console.log(`Mi nombre es ${nombre} ${apellido}`);

//Metodos de string
console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());
console.log(apellido.length); //Cantidad de caracteres de una palabra
console.log(frase.length); //Cantidad de caracteres de una palabra
console.log(apellido.charAt(3)); //Obtener posicion en caracter
console.log(apellido.charAt(apellido.length - 1)); //Obtener posicion en caracter
console.log(apellido.substr(0, 3)); //Parametros de susbstr (posision, cantidad de caracteres a extraer)

console.log(frase.trim()); //Elimina los espacios al principio y al final
frase = frase.trim(); //Elimina los espacios al principio y al final
