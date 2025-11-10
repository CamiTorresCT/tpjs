// Carrito de Compras - Kiosco

// VARIABLES (string, number, boolean, null)
let cliente = "Camila";       // string
let dinero = 2000;            // number
let compraActiva = true;      // boolean
let descuento = null;         // null

// OBJETO LITERAL con método y uso de this
const kiosco = {
    nombre: "Kiosco Las Delicias",
    direccion: "Av. Siempre Viva 123",
    mostrarInfo: function() {
        console.log(`Bienvenida al ${this.nombre} ubicado en ${this.direccion}`);
    }
};

// Muestra la información del kiosco
kiosco.mostrarInfo();

// ARRAY y recorrido con forEach()
const productos = [
    { nombre: "Gaseosa", precio: 800 },
    { nombre: "Alfajor", precio: 500 },
    { nombre: "Galletitas", precio: 700 }
];

console.log("\nProductos disponibles:");
productos.forEach((p, i) => console.log(`${i + 1}. ${p.nombre} - $${p.precio}`));

// FUNCIONES
// Función tradicional
function calcularTotal(pedidos) {
    let total = 0;
    pedidos.forEach(p => total += p.precio);
    return total;
}

// Función flecha con retorno implícito
const aplicarDescuento = total => total * 0.9;

// Simulamos la compra de 2 productos
let pedido = [productos[0], productos[1]];
let total = calcularTotal(pedido);
console.log(`\nTotal sin descuento: $${total}`);

// CONTROL DE FLUJO - if/else
if (pedido.length >= 2) {
    descuento = true;
    total = aplicarDescuento(total);
    console.log("Descuento aplicado del 10%");
} else {
    descuento = false;
    console.log("No hay descuento");
}
console.log(`Total final: $${total}`);

// CONTROL DE FLUJO - switch
let metodoPago = "efectivo";
switch (metodoPago) {
    case "tarjeta":
        console.log("Pagará con tarjeta (+5% recargo)");
        total *= 1.05;
        break;
    case "efectivo":
    case "transferencia":
        console.log("Pagará sin recargo.");
        break;
    default:
        console.log("Método de pago no reconocido.");
}

// CONTROL DE FLUJO - do...while
do {
    if (dinero >= total) {
        console.log(`Pago exitoso. ¡Gracias por su compra, ${cliente}!`);
        compraActiva = false;
    } else {
        console.log("Saldo insuficiente. Agregando dinero...");
        dinero += 500;
    }
} while (compraActiva);

// OPCIONAL - bind()
function despedir() {
    console.log(`Gracias por visitar ${this.nombre}. ¡Vuelva pronto!`);
}
const despedida = despedir.bind(kiosco);
despedida();
