import { alumnasWild, ourData } from "./data.js"; //Recibe el EXPORT de fetch de data.js
alumnasWild(ourData, "ajusco");

//------------------------------// Validación usuario-password //------------------------------//
/*let validacion = document.getElementById("entry");

validacion.addEventListener("click", function () {
  let user = document.getElementById("name").value;
  let contraseña = document.getElementById("password").value;
  if (user == "Vania" && contraseña == 7) {
    document.getElementById("access-screen").hidden = true; // pantalla user
    document.getElementById("sedes").hidden = false; // pantalla dashboard
  } else {
    alert("Acceso denegado");
  }
});*/
