alert('Bienvenido a ChangApp!!');

//************ Variables ******************

let menu = parseInt(
  prompt(
    'Ingrese una opción del 1 al 5: \n \n 1) Agregar un producto \n 2) Mostrar los productos agregados \n 3) Buscar un producto \n 4) Filtrar un producto según palabra \n 5) Eliminar producto \n 6) Salir'
  )
);
let changuito = [];

//************ Funciones *********************
function agregar(producto) {
  producto = prompt('Ingrese un producto');
  if (!producto) {
    console.error(
      'No se ingresó un producto. Si lo ingresó presione "Aceptar" para agregarlo.'
    );
  } else {
    while (producto) {
      changuito.push(producto);
      producto = prompt('Ingrese un producto');
    }
  }
}

function buscar(item) {
  item = prompt('Ingrese el producto a buscar:');
  if (!item) {
    console.error('No se ingreso un producto');
  } else {
    switch (changuito.includes(item)) {
      case true:
        console.log(`"${item}" ya fue agregado al Carrito.`);
        break;

      case false:
        console.log(`"${item}" aún NO se agregó al Carrito.`);
        break;
    }
  }
}

function filtrar(producto) {
  if (!producto) {
    console.error('No se ingreso un producto');
  } else {
    let productosFiltrados = changuito.filter(function (filtrados) {
      return filtrados.substr(0, producto.length) === producto;
    });
    if (productosFiltrados.length === 0) {
      console.log('No se encontró ninguna coincidencia.');
    } else {
      console.log(
        `Coincidencias encontradas para "${producto}": ${productosFiltrados.join(
          ' - '
        )}`
      );
    }
  }
}

function eliminar(items) {
  items = prompt('¿Qué producto deseas eliminar?');

  if (!items) {
    console.error('No se ingreso un producto');
  } else if (changuito.indexOf(items) !== -1) {
    changuito.splice(changuito.indexOf(items), 1);
    alert('El producto se eliminó con éxito');
  } else {
    console.log(
      'El producto que deseas eliminar no se encuentra en el Carrito.'
    );
  }
}

function valorCorrecto() {
  while (!menu || menu < 1 || menu > 6) {
    console.error('Ingrese una opción válida. O pulse "6" para salir');
    menu = parseInt(
      prompt(
        'Ingrese una opción del 1 al 5: \n \n 1) Agregar un producto \n 2) Mostrar los productos agregados \n 3) Buscar un producto \n 4) Filtrar un producto según palabra \n 5) Eliminar producto \n 6) Salir'
      )
    );
  }
}

//*********************** Programa ***********************

valorCorrecto();

while (menu >= 1 && menu <= 5) {
  switch (menu) {
    case 1:
      agregar();
      break;

    case 2:
      console.log(`Tu carrito: ${changuito.join(' - ')}`);
      break;

    case 3:
      buscar();
      break;

    case 4:
      filtrar(prompt('Ingrese el producto que desea filtrar:'));
      break;

    case 5:
      eliminar();
      break;

    default:
      break;
  }

  menu = parseInt(
    prompt(
      'Ingrese una opción del 1 al 5: \n \n 1) Agregar un producto \n 2) Mostrar los productos agregados \n 3) Buscar un producto \n 4) Filtrar un producto según palabra \n 5) Eliminar producto \n 6) Salir'
    )
  );
  valorCorrecto();
}
