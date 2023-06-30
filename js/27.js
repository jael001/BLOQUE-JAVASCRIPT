//POO

const producto = {
  nombre: "tablet",
  precio: 500
}

//objetc constructor

function Cliente(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function() {
  return  `El Cliente ${this.nombre}  ${this.apellido}`;
}

function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

//crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function(producto) {
  return  `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}

const producto2 = new Producto('Monitor curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);


const cliente = new Cliente("jael", "lopez");

console.log(cliente);

function formatearProducto(producto) {
  return  `El producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`;
}


console.log(producto2);
console.log(producto2.formatearProducto() );
console.log(producto3.formatearProducto() );






