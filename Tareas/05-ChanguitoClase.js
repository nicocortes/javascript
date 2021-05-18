let carrito = ['BANANA', 'BICICLETA', 'HORNO', 'PARLANTES'];

function listarProductos() {
  console.log('Productos del carrito:');
  for (let i = 0; i < carrito.length; i++) {
    console.log(`${i + 1} - ${carrito[i]}`);
  }
}
listarProductos();

//Otra forma
carrito.map(function (producto, index) {
  console.log(`${index + 1} - ${producto}`);
});

function agregarProducto() {
  let producto = prompt('Ingrese un producto:');
  if (producto) {
    carrito.push(producto.toUppercase());
  }
  while (producto) {
    carrito.push(producto.trim().toUpperCase());
    producto = prompt('Ingrese el producto');
  }
}

function buscarProducto() {
  let producto = prompt('Ingrese un producto:');

  if (producto) {
    let resultado = carrito.includes(producto.trim().toUpperCase());

    if (resultado) {
      console.log(`El producto ${producto.trim().toUpperCase()}`);
    } else {
      console.warn('El producto no existe');
    }
  } else {
    console.log('No se ingreso un producto o cancelo el programa');
  }
}

function filtrarProductos() {
  let producto = prompt('Ingrese un producto:');

  if (producto) {
    let productos = carrito.filter(function (produc) {
      return produc.indexOf(producto.trim().toUpperCase() > -1);
    });
    if (productos.length > 0) {
      return productos;
    } else {
      console.log('No se encontro ningún producto con esa búsqueda');
    }
  } else {
    console.log('Campo vacío o cancelado');
  }
}

function eliminarProducto() {
  let pos = prompt('Ingrese el numero del producto a eliminar:');

  if (pos) {
    pos = parseInt(pos);
    let producto = carrito[pos - 1];

    if (producto !== undefined) {
      let validar = confirm(`Esta seguro que quiere eliminar ${producto}`);
      if (validar) {
        carrito.splice(pos - 1, 1);
        alert(`Se eliminó el producto ${producto}`);
        listarProductos();
      }
    } else {
      console.error('No hay producto con esa posición');
    }
  } else {
    console.error('Ocurrió un error y no es posible realizar la accion.');
  }
}
