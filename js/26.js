//this

window.nombre = "Un nombre";

const reservacion = {
  nombre: "jael",
  apellido: "lópez",
  total: 5000,
  pagado: false,
  informacion:  function() {
    console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
  }
}

const reservacion2 = {
  nombre: "joab",
  apellido: "lópez",
  total: 5000,
  pagado: false,
  informacion: function() {
    console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
  }
}

reservacion.informacion();
reservacion2.informacion();