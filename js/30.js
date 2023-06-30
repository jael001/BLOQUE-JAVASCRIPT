const usuarioAutenticado = new Promise((resolve,reject) => {
const auth = true;

 if(auth) {
  resolve('Uuario Autenticado');// EL PROMISE SE CUMPLE
 }else {
  reject('No se pudo iniciar secion');//EL PROMISE NO SE CUMPLE
 }

});

usuarioAutenticado
.then(resultado => console.log(resultado))
.catch(error => console.log(error))

// En los promise existen 3 valores
// pending: No se ha cumplido pero tampoco se ha rechazado
// fulfilled: Ya se cumplio
// rejected: Se ha rechazado o no se pudo cumplir
