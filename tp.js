let cliente = "Camila"; // string
let dinero = 2000; // number
let compraActiva = true; // boolean
let descuento = null; // null

const kiosco = {
  nombre: "Kiosco X",
  mostrarInfo() {
    console.log(`Bienvenido a ${this.nombre}`);
  }
};

const productos = [
  { nombre: "Gaseosa", precio: 800 },
  { nombre: "Chocolate", precio: 600 },
  { nombre: "Galletitas", precio: 400 }
];

productos.forEach(p => console.log(p.nombre));

function calcularTotal(lista) {
  let total = 0;
  lista.forEach(p => total += p.precio);
  return total;
}

const aplicarDescuento = total => total * 0.9;

let total = calcularTotal(productos);

if (total > dinero) {
  console.log("No alcanza el dinero.");
} else {
  console.log("Compra exitosa.");
}

let metodoPago = "tarjeta";
switch (metodoPago) {
  case "efectivo":
  case "tarjeta":
  case "transferencia":
    console.log("Método de pago aceptado.");
    break;
  default:
    console.log("Método no válido.");
}

let intentos = 0;
do {
  intentos++;
  console.log("Intento de pago número " + intentos);
} while (intentos < 2);

function despedir() {
  console.log(`Gracias por visitar ${this.nombre}`);
}

const despedida = despedir.bind(kiosco);
despedida();

