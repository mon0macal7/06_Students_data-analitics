//import { alumnasWild, ourData } from "./data.js"; //Recibe EXPORT de fetch de data.js

//------------------------- Datos por Ajusco ------------------------------//
let ajuscoSede = document.getElementById("ajus")


ajuscoSede.addEventListener("click", () => {

    console.log("click en", ajuscoSede)
    console.log("ajusco")
        //    alumnasWild(ourData, "ajusco");

    //-- Guardar data para llevarla a dashboard --//
    let myData = "ajusco";
    localStorage.setItem('objectToPass', myData);

    //------ Función abrir sede en dashboard ------//

    localStorage.removeItem('objectToPass'); // Limpiar el localStorage
    window.location.href = "./index.html"; // Abrir dashboard
    //    alumnasWild(ourData, "ajusco");
    console.log(myData)
});



//---------------------- Datos por Chapultepec ---------------------------//

let chapultepecSede = document.getElementById("chapu")
chapultepecSede.addEventListener("click", () => {
    console.log("click en", chapultepecSede)
        //    alumnasWild(ourData, "chapultepec");

    //-- Guardar data para llevarla a dashboard --//
    let myData = "chapultepec";
    localStorage.setItem('objectToPass', myData);

    //------ Función abrir sede en dashboard ------//
    localStorage.removeItem('objectToPass'); // Limpiar el localStorage
    window.location.href = "index.html" //Abrir dashboard
        //    alumnasWild(ourData, "chapultepec");
    console.log(myData)
});



//----------------------- Datos por Iztapalapa ---------------------------//

let iztapalapaSede = document.getElementById("ixtapa")
iztapalapaSede.addEventListener("click", () => {
    console.log("click en", iztapalapaSede)
        //    alumnasWild(ourData, "iztapalapa");

    //-- Guardar data para llevarla a dashboard --//
    let myData = "iztapalapa";
    localStorage.setItem('objectToPass', myData);

    //------ Función abrir sede en dashboard ------//
    localStorage.removeItem('objectToPass'); // Limpiar el localStorage
    window.location.href = "index.html" // Abrir dashboard
        //    alumnasWild(ourData, "iztapalapa");
    console.log(myData)
});