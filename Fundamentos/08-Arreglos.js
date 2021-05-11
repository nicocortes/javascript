//Array o arreglos
//Lista
let alumnos = ['Pablo', 'Fabrizio', 'Laura', 'Gabriela'];

//Acceder a un elemento dentro del arreglo
alumnos[2];

//Obtener el último elemento
alumnos[alumnos.length - 1];

//Concatenar todos los elementos en un string
alumnos.join();

//Iterar
for (let i = 0; i < alumnos.length; i++) {
  console.log(`Hola soy ${alumnos[i]}`);
}

//Agregar elementos al final
alumnos.push('Jorge');

//Eliminar el último elemento
alumnos.pop();

//Añadir un elemento al principio
alumnos.unshift('Walter');

//Eliminar el primer elemento
alumnos.shift();

//Encontrar el índice de un elemento (si no existe el elemento nos devuelve -1)
console.log(alumnos.indexOf('Fabrizio'));

//Encontrar un elemento (si el elemento existe devuelve true, sino false)
console.log(alumnos.includes('Gabriela'));

//Eliminar elemento mediante su posición
let pos = 1;
alumnos.splice(pos, 1);

//Eliminar varios elemento mediante su posición
let alumnosEliminados = alumnos.splice(0, 3);

//Reemplazar valores. También podemos agregar elementos pero buena práctica sería usar push
alumnos.splice(0, 2, 'Daniel', 'Juan');

//Concatenar dos array
let alumnas = ['Laura', 'Gabriela', 'Rocío'];
let comision = alumnas.concat(alumnos);

//Invertir orden array
alumnas.sort(); //Ordena de A - Z. Con números no funciona, tenemos que usar una función
alumnas.reverse(); //Ordena de Z - A
