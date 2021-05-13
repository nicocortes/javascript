alert('Bienvenido a ChangApp!!');

let tarea = parseInt(
  prompt(
    'Hola soy tu Carrito! Escribí una opción del 1 al 4: \n \n 1) Agregar un producto \n 2) Mostrar los productos agregados \n 3) Buscar un producto \n 4) Eliminar un producto'
  )
);
let carrito = [];
let productos = '';
let busquedaProducto = '';
let eliminarProducto = '';

while (tarea >= 1 && tarea <= 4) {
  switch (tarea) {
    case 1:
      productos = prompt('Ingrese un nuevo producto:');
      while (productos) {
        carrito.push(productos);
        productos = prompt('Ingrese un nuevo producto:');
      }
      break;

    case 2:
      console.log(`Tu carrito: ${carrito.join(' - ')}`);
      break;

    case 3:
      busquedaProducto = prompt('Ingrese el producto a buscar:');

      if (busquedaProducto === null || busquedaProducto === '') {
        console.error('No se ingreso un producto');
      } else {
        switch (carrito.includes(busquedaProducto)) {
          case true:
            console.log(`"${busquedaProducto}" ya fue agregado al Carrito.`);
            break;

          case false:
            console.log(`"${busquedaProducto}" aún NO se agregó al Carrito.`);
            break;
        }
      }
      break;

    case 4:
      eliminarProducto = prompt('¿Qué producto deseas eliminar?');

      if (eliminarProducto === null || eliminarProducto === '') {
        console.error('No se ingreso un producto');
      } else if (carrito.indexOf(eliminarProducto) !== -1) {
        carrito.splice(carrito.indexOf(eliminarProducto), 1);
        alert('El producto se eliminó con éxito');
      } else {
        console.log(
          'El producto que deseas eliminar no se encuentra en el Carrito.'
        );
      }
      break;
  }
  tarea = parseInt(
    prompt(
      'Hola soy tu Carrito! Escribí una opción del 1 al 4: \n \n 1) Agregar un producto \n 2) Mostrar los productos agregados \n 3) Buscar un producto \n 4) Eliminar un producto'
    )
  );
}
if (tarea < 1 || tarea > 4 || isNaN(tarea) === true || tarea === '') {
  console.error('No se ingreso una opción válida');
}
