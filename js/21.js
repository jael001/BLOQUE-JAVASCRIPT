//Arrow function
const sumar2 = (n1, n2) =>  console.log(n1 + n2);
sumar2(5, 10);

const aprendiendo = tegnologia => console.log(`aprendiendo ${tegnologia}`)
aprendiendo ("javasCript");
// Array Methods
const meses = ["Enero","Febrero","Marzo","Abril","Mayo"];

const carrito = [
  { nombre: "Monitor 20 pulgadas", precio: 500 },
  { nombre: "Televicion 50 pulgadas", precio: 700 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Bocinas", precio: 300 },
  { nombre: "Laptop", precio: 800 }
];
//forEach
meses.forEach( mes  => {
  if(mes == "Marzo") {
      console.log("Marzo si existe");
    }
  });
  let resultado;
  //some
  resultado = carrito.some( producto => producto.nombre === 'Celular');
  //reduce
  resultado = carrito.reduce( (total, producto) => total + producto.precio,0);
  //filter
  resultado = carrito.filter( producto => producto.precio > 400);
  resultado = carrito.filter( producto => producto.nombre !== "Celular");
  console.log(resultado);

