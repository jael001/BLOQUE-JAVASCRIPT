//foor lop

// for( let i = 0; i < 10; i++ ) {
//   console.log(i);
// }

// for( let i = 1; i <= 100; i++ ) {
//  if( i % 2 === 0 ) {
//   console.log(` El numero ${i} es PAR`);
//  }else {
//   console.log(` El numero ${i} es INPAR`);
//  }
// }


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

for(let i = 0; i < carrito.length; i++ ) {
  console.log( carrito[i].nombre );
}

//while loop
// // let i = 1//indice oh valor inicial

// // while( i < 100) {//conddiciom

// //   if( i % 2 === 0 ){
// //     console.log(`El número ${i} es PAR`);
// //   }else {
// //     console.log(`El número ${i} es INPAR`);
// //   }


//   i++;//incremento
// }

let i = 100;

do {
  console.log(i);

  i++;
}while(i < 10);