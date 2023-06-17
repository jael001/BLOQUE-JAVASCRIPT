// const puntaje = 100;

// if(puntaje !== 1000) {
//   console.log("no es igual");
// }else {
//   console.log("Si el puntaje es 1000");
// }

// const efectivo = 1000;
// const carrito = 800;

// if (efectivo > carrito) {
//   console.log("El usuario puede pagar");
// }else {
//  console.log("Fondos insuficientes");
// }

const rol = "Editor";

if(rol === "ADMINISTRADOR") {
  console.log("acceso a todo el sistema");

}else if(rol === "Editor") {
  console.log("Eres editor, puedes entrar pero no puedes hacer mucho");
}else {
  console.log("no tienes acceso");
}
