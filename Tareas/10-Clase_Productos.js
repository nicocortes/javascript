class Producto {
  constructor(sku, nombre, precio) {
    this.sku = sku;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    document.write(
      `SKU: ${this.sku} <br> Nombre: ${this.nombre} <br> Precio: ${this.precio} <br><br><br>`
    );
  }
}

let producto1 = new Producto('G17216', 'Pulidor de auto', '$ 1984.65');
let producto2 = new Producto('G12664', 'Shampoo neutro para auto', '$2654.98');
let producto3 = new Producto('G7014', 'Cera de Carnauba para auto', '$3674.89');

let productos = [producto1, producto2, producto3];

productos.forEach(function (products) {
  document.write(
    `PRODUCTO ${productos.indexOf(products) + 1} <br>==============<br>`
  );
  products.imprimeDatos();
});
