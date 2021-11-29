import { alumnasWild, ourData } from "./data.js"; //Recibe el EXPORT de fetch de data.js

//alumnasWild(ourData, "iztapalapa")
//alumnasWild(ourData, "chapultepec")

//------------------------------// Validación usuario-password //------------------------------//
let validacion = document.getElementById("entry");

validacion.addEventListener("click", () => {
    let user = document.getElementById("name").value;
    let contraseña = document.getElementById("password").value;
    if (user == "Vania" && contraseña == 7) {
        document.getElementById("access-screen").hidden = true; // pantalla user
        document.getElementById("sedes").hidden = false; // pantalla dashboard
        document.getElementById("dashboard-screen").hidden = true; // pantalla dashboard
    } else {
        alert("Acceso denegado");
    }
});