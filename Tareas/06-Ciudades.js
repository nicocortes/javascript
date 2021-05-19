let ciudades = [];

function mostrarCiudades() {
  for (let i = 0; i < ciudades.length; i++) {
    document.write(`
      ${ciudades[i]}, `);
  }
}

function agregarCiudades(ciudad) {
  ciudad = prompt('Ingrese las ciudades que desea agregar:');
  while (ciudad && ciudad != 0) {
    ciudades.push(ciudad.toUpperCase());
    ciudad = prompt('Ingrese las ciudades que desea agregar:');
    while (ciudad === '') {
      alert(
        'No se ingreso un valor. Si desea salir ingrese "0" o presione "Cancelar".'
      );
      ciudad = prompt('Ingrese las ciudades que desea agregar:');
    }
  }
  if (ciudades.length === 0) {
    alert('No se ingreso ningun valor. Reinicie el programa');
  }
}

agregarCiudades();
if (ciudades.length !== 0) {
  document.write('Ciudades ingresadas: ');
  mostrarCiudades();
  document.write('<br><br>*****************************');
  document.write(
    `<br> La cantidad de ciudades ingresadas son ${ciudades.length}`
  );
  document.write('<br><br> Items por posición:');
  document.write(` <br> 1°:  ${ciudades[0]}`);
  document.write(` <br> 2°:  ${ciudades[1]}`);
  document.write(`<br> 3°: ${ciudades[2]}`);
  document.write(` <br>Ultima: ${ciudades[ciudades.length - 1]} <br>`);
  ciudades.splice(ciudades.length - 1, 1, 'PARIS');
  document.write('<br> Reemplazando "PARIS" al final:');
  mostrarCiudades();
  ciudades.splice(1, 1, 'BARCELONA');
  document.write('<br> Reemplazando "BARCELONA" en la segunda posición:');
  mostrarCiudades();
}
