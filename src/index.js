//Aqui se manejan las funciones relacionadas con el DOM

let validacion = document.getElementById("entry")

validacion.addEventListener("click", function() {

    let user = document.getElementById("name").value
    let contraseña = document.getElementById("password").value

    if (user == "Vania" && contraseña == 7) {

        document.getElementById("access-screen").hidden = true // pantalla user
        document.getElementById("sedes").hidden = false // pantalla dashboard

    } else {
        alert("Acceso denegado")
    }
})