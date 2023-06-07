// "use strick"; // correr JS en un modo estricto

const producto = {
  nombreProducto : "Monitor 20 pulgadas",
  precio : 300,
  disponible : true
}

Object.seal(producto); // .freeze .seal

producto.precio = "NUEVO PRECIO";

delete producto.precio

console.log(producto);
