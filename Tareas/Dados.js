let menu = 0;
let dadoUno = [];
let dadoDos = [];
let sumaDados = [];

function tiradaDados() {
  let tirada = 0;
  for (let i = 0; i < 50; i++) {
    tirada = Math.floor(Math.random() * 6) + 1;
    dadoUno.push(tirada);
  }
  for (let i = 0; i < 50; i++) {
    tirada = Math.floor(Math.random() * 6) + 1;
    dadoDos.push(tirada);
  }
}

function suma() {
  for (let i = 0; i < 50; i++) {
    sumaDados.push(dadoUno[i] + dadoDos[i]);
  }
}

menu = parseInt(prompt('Ingrese una "1" para lanzar los dados.'));
switch (menu) {
  case 1:
    tiradaDados();
    suma();
    console.log(`La sumas obtenidas fueron: ${sumaDados.join('|')}`);
    break;

  default:
    console.error('No se pudo lanzar los dados');
    break;
}
