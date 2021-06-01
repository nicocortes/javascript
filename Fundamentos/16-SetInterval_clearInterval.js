//setInterval: cada cierto tiempo se ejecuta la función
// setInterval(function () {
//   console.log('Hola');
// }, 3000);

//clearInterval: método para parar setInterval()
// clearInterval(intervalo);

//Ejemplo
let intervalo = null;
let contador = 0;

function iniciarContador() {
  intervalo = setInterval(function () {
    console.log(contador);
    contador += 1;
  }, 1000);
}

function pausarContador() {
  if (intervalo !== null) {
    clearInterval(intervalo);
  }
}

function reiniciarContador() {
  pausarContador();
  contador = 0;
  console.clear();
  iniciarContador();
}

//setTimeout
function logIn() {
  setTimeout(function () {
    let usuario = document.getElementById('userText').value;
    if (usuario) {
      alert('Usuario logueado');
    } else {
    }
  }, 2000);
}
