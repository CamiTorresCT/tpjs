// GESTIÓN DE PEDIDOS - KIOSCO

// Variables y tipos de datos
let nombreCliente = "Camila";          // string
let dineroDisponible = 1500;           // number
let pedidoActivo = true;               // boolean
let descuentoAplicado = null;          // null

// Objeto literal principal
const kiosco = {
    nombre: "Kiosco Las Delicias",
    direccion: "Av. Siempre Viva 123",
    productos: [
        { nombre: "Gaseosa", precio: 800 },
        { nombre: "Alfajor", precio: 500 },
        { nombre: "Chicle", precio: 200 }
    ],
    mostrarInfo() {
        console.log(`Bienvenido/a al ${this.nombre}, ubicado en ${this.direccion}`);
    }
};

// Mostrar información del kiosco
kiosco.mostrarInfo();

// Array relacionado y recorrido con forEach()
console.log("\n--- Productos disponibles ---");
kiosco.productos.forEach((producto, i) => {
    console.log(`${i + 1}. ${producto.nombre} - $${producto.precio}`);
});

// Función tradicional con parámetros y return
function calcularTotal(pedidos) {
    let total = 0;
    pedidos.forEach(item => total += item.precio);
    return total;
}

// Función flecha con retorno implícito
const aplicarDescuento = total => total * 0.9;

// Simulamos una compra
let pedidoCliente = [kiosco.productos[0], kiosco.productos[1]]; // Gaseosa + Alfajor
let totalCompra = calcularTotal(pedidoCliente);

console.log(`\nTotal sin descuento: $${totalCompra}`);

// Control de flujo: if / else y operador ternario
if (pedidoCliente.length >= 2) {
    descuentoAplicado = true;
    totalCompra = aplicarDescuento(totalCompra);
    console.log("Descuento aplicado del 10%");
} else {
    descuentoAplicado = false;
    console.log("No aplica descuento");
}

console.log(`Total final: $${totalCompra}`);

// Control de flujo: switch
let metodoPago = "efectivo";
switch (metodoPago) {
    case "tarjeta":
        console.log("Pagará con tarjeta (recargo 5%)");
        totalCompra *= 1.05;
        break;
    case "efectivo":
    case "transferencia":
        console.log("Pagará sin recargo.");
        break;
    default:
        console.log("Método de pago no reconocido.");
}

// do...while: simulación de intento de pago
let intento = 0;
do {
    intento++;
    console.log(`Intento de pago nº ${intento}...`);
    if (dineroDisponible >= totalCompra) {
        console.log(`Pago exitoso. ¡Gracias por su compra, ${nombreCliente}!`);
        pedidoActivo = false;
    } else {
        console.log("Saldo insuficiente. Intente nuevamente.");
        dineroDisponible += 500; // El cliente agrega dinero
    }
} while (pedidoActivo);

// Ejemplo opcional de bind()
function despedirCliente() {
    console.log(`Gracias por visitar ${this.nombre}. ¡Vuelva pronto!`);
}
const despedida = despedirCliente.bind(kiosco);
despedida();
