//Tarea 1: Objeto persona
alert('Ingrese los datos de la persona.');
let persona = {
  nombre: prompt('Nombre:'),
  edad: prompt('Edad:'),
  dni: prompt('DNI:'),
  domicilio: prompt('Domicilio:'),
  hijos: prompt('N° de Hijos:'),
  profesion: prompt('Profesion:'),
  saludar: function () {
    console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad}`);
  },
  listar: function () {
    for (let atributo in persona) {
      console.log(`${atributo} : ${persona[atributo]}`);
    }
  },
};

persona.saludar();
persona.listar();

//Tarea 2: Arreglo de objetos
let peliculas = [
  {
    titulo: 'Duro de matar',
    genero: 'Acción',
    año: '1980',
    sinopsis: 'Policía que salva a la sociedad de delicuentes.',
  },
  {
    titulo: 'Plan perfecto',
    genero: 'Suspenso',
    año: '2006',
    sinopsis: 'Robo perfecto a un banco',
  },
  {
    titulo: 'Los Intocables',
    genero: 'Acción',
    año: '1987',
    sinopsis: 'Agente federal intenta capturar a capo de la mafia',
  },
  {
    titulo: 'Buscando justicia',
    genero: 'Drama',
    año: '2019',
    sinopsis: 'Abogado defiende a un hombre de un crimen que no cometió.',
  },
];

peliculas.forEach(function (pelicula) {
  console.log(
    `**Pelicula ${peliculas.indexOf(pelicula) + 1}:** \n Título: ${
      pelicula.titulo
    } \n Género: ${pelicula.genero} \n Año: ${pelicula.año} \n Sinopsis: ${
      pelicula.sinopsis
    }`
  );
});
