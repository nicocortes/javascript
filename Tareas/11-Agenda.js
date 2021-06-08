let agenda = JSON.parse(localStorage.getItem('contactos')) || [];

let memoria = prompt('Cuantos contactos desea ingresar (Máximo 10):');
while (memoria < 1 || memoria > 10) {
  alert('Debe ingresar un número entre 1 y 10');
  memoria = prompt('Cuantos contactos desea ingresar (Máximo 10):');
}

class Contacto {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }
}

function añadirContacto(name, phone) {
  if (agenda.length <= 3) {
    agenda.push(new Contacto(name, phone));
    localStorage.setItem('contactos', JSON.stringify(agenda));
  } else {
    console.warn('Agenda llena');
  }
}
