// function sumar(n1, n2) {
//  return n1 + n2;
// }
// const resultado = sumar(2, 3);
// console.log(resultado);


let total = 0;

function agreagarCarrito(precio) {
  return total += precio;
}

function calcularImpuesto(total) {
  return 1.15 * total;
}

total = agreagarCarrito(200);
total = agreagarCarrito(400);
total = agreagarCarrito(600);

console.log(total);

const totalApagar = calcularImpuesto(total);

console.log(`El total a pagar con impuestos es de: ${totalApagar}`);
