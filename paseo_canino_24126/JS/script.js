

console.log("Proyecto Comision 24126");

let nombre = "Elvira";
let apellido = "Maggiolo";
const dni = "13887237";
const comision = "COMISION CODO A CODO 24126"; // Espacios eliminados
console.log(nombre, apellido, dni, comision);

let bienvenidos = "bienvenidos"; // Renombrada la variable
let siempre = "siempre"; // Renombrada la variable
console.log(bienvenidos, siempre);

const actividades = ["veterinaria", "paseadores", "productos-veterinarios"];
actividades.push("espacios-de-relax", "baños-perros", "peluqueria-canina");
console.log(actividades);

const empresa = {
  nombre: "Pet Shop 24126 Veterinaria y Paseadores",
  trayectoria: 50,
};
console.log(empresa);

empresa.trayectoria = 65;
console.log(empresa);
console.log(empresa.trayectoria);

document.addEventListener("DOMContentLoaded", function () {
  var title = document.querySelector("h1.animate-title");
  title.classList.add("animated"); // Usar la clase "animated" en lugar de "slideIn"
});



function validarFormulario() {
  var checkboxes = document.querySelectorAll('input[name="motivo"]:checked');
  if (checkboxes.length === 0) {
      alert('Debes seleccionar al menos una opción en el motivo de consulta.');
      return false;
  }
  return true;
}

