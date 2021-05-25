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
