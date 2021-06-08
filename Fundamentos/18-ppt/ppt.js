let opciones = ['PIEDRA', 'PAPEL', 'TIJERA'];
let jugador = null;
let bot = null;

function playGame() {
  //Lo que decida la pc y el jugador
  console.log('Juego en acción');
  seleccionBot();
  seleccionJugador();
}

function seleccionBot() {
  //Definir la opción elegida por el bot
  return (bot = Math.round(Math.random() * 2));
}

function seleccionJugador() {
  //Manejo lo que decida el jugador
  jugador = parseInt('Ingrese su opción: 0 = PIEDRA | 1 = PAPEL  | 2 = TIJERA');
  if (!isNaN(jugador)) {
    if (jugador >= 0 && jugador <= 2) {
      switch (true) {
        case jugador === bot:
          mensajeAlert('EMPATE');
          break;
        case (jugador = 0 && bot === 2):
          mensajeAlert('GANASTE');
          break;
        case (jugador = 1 && bot === 0):
          mensajeAlert('GANASTE');
          break;
        case (jugador = 2 && bot === 1):
          mensajeAlert('GANASTE');
          break;
        default:
          mensajeAlert('PERDISTE');
          break;
      }
    } else {
      mensajeAlert('noOpcion');
    }
  } else {
    mensajeAlert('noNumero');
  }
}

function mensajeAlert(resultado) {
  //Devuelve el mensaje en pantalla
  if (resultado === 'noOpcion') {
    swal('ERROR!', 'No existe la opción elegida', 'error');
  }

  if (resultado === 'noNumero') {
    swal('ERROR!', 'Debe ingresar un número entre 0 y 2', 'error');
  }

  if (resultado === 'GANASTE') {
    swal(
      'GANASTE!',
      `Elegiste ${opciones[jugador]} y el bot eligió ${opciones[bot]}`,
      'success'
    );
  }

  if (resultado === 'PERDISTE') {
    swal(
      'PERDISTE!',
      `Elegiste ${opciones[jugador]} y el bot eligió ${opciones[bot]}`,
      'error'
    );
  }

  if (resultado === 'EMPATE') {
    swal(
      'EMPATE!',
      `Elegiste ${opciones[jugador]} y el bot eligió ${opciones[bot]}`,
      'info'
    );
  }
}
