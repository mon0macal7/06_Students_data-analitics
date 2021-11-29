//------------------------------// Validación usuario-password //------------------------------//
let validacion = document.getElementById("entry");

validacion.addEventListener("click", () => {
    let user = document.getElementById("name").value;
    let contraseña = document.getElementById("password").value;
    if (user == "Vania" && contraseña == 7) {
        window.location.href = "./sedes.html"
            /*document.getElementById("access-screen").hidden = true; // pantalla user
            document.getElementById("sedes").hidden = false; // pantalla dashboard
            document.getElementById("dashboard-screen").hidden = true; // pantalla dashboard*/
    } else {
        alert("Acceso denegado");
    }
});