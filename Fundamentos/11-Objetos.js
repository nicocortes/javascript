let auto = {
  color: 'Red',
  marca: 'Fiat',
  modelo: 'Palio',
  anio: 2018,
  encendido: false,
  encenderApagar: function () {
    this.encendido = !this.encendido;
    if (this.encendido) {
      console.log('El vehículo está encendido');
    } else {
      console.log('El vehículo está apagado');
    }
  },
};

let alumno = {
  nombre: 'Carlos',
  edad: 40,
  dni: 26758467,
  curso: 'Fullstack',
  saludar: function () {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  },
};

//arreglo de objetos
let alumnos = [
  {
    nombre: 'Julio',
    curso: 'Fullstack',
    nombre: 'Fabrizio',
    curso: 'Javascript',
    nombre: 'Miguel',
    curso: 'Fullstack',
  },
];

for (let i = 0; i < alumnos.length; i++) {
  console.log(`Nombre: ${alumnos[i].nombre}   -    ${alumnos[i].curso}`);
}
