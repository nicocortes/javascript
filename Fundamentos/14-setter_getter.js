class Cuenta {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }

  //Propiedad computada: es una propiedad que para acceder a su valor ejecuta una función
  set ingresar(valor) {
    if (valor <= 0) {
      console.error('Ingrese un valor mayor que cero');
    }
    this.saldo += valor;
    this.informar;
  }

  set extraer(valor) {
    if (valor > this.saldo) {
      console.warn(`Solo puede extraer hasta $this.saldo`);
      return;
    }
    this.saldo -= valor;
  }

  get informar() {
    console.log('===== Detalle de la cuenta ==========');
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo: ${this.saldo}`);
    console.log('===============================');
  }
}

let cuenta1 = Cuenta('Alex');
