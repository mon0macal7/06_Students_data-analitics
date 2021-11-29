export const ourData = "../data/students.json";

export let alumnasWild = (ourData, sede) => {
    fetch(ourData)
        .then((response) => response.json())
        .then((data) => wildCodeCamp(data, sede))
        //metodo de objeto para acceder a las keys,darle id a las imagenes: Object.keys(nombreDelObjeto)
        .catch((error) => console.log(error));
};


//-------------------------- Función iterar datos --------------------------//
let wildCodeCamp = (data, sede) => {
    console.log(data[sede]);
};


//------------------------- Datos por Ajusco ------------------------------//
let ajuscoSede = document.getElementById("ajus")

ajuscoSede.addEventListener("click", () => {
    console.log("click en", ajuscoSede)
    console.log("ajusco")
    alumnasWild(ourData, "ajusco");

    //-- Guardar data para llevarla a dashboard --//
    let myData = "ajusco";
    localStorage.setItem('objectToPass', myData);

    //------ Función abrir sede en dashboard ------//

    localStorage.removeItem('objectToPass'); // Limpiar el localStorage
    window.location.href = "./dashboard.html"; // Abrir dashboard
    alumnasWild(ourData, "ajusco");
    console.log(myData)
});


//---------------------- Datos por Chapultepec ---------------------------//

let chapultepecSede = document.getElementById("chapu")
chapultepecSede.addEventListener("click", () => {
    console.log("click en", chapultepecSede)
    alumnasWild(ourData, "chapultepec");

    //-- Guardar data para llevarla a dashboard --//
    let myData = "chapultepec";
    localStorage.setItem('objectToPass', myData);

    //------ Función abrir sede en dashboard ------//
    localStorage.removeItem('objectToPass'); // Limpiar el localStorage
    window.location.href = "dashboard.html" //Abrir dashboard
    alumnasWild(ourData, "chapultepec");
    console.log(myData)
});



//----------------------- Datos por Iztapalapa ---------------------------//

let iztapalapaSede = document.getElementById("ixtapa")
iztapalapaSede.addEventListener("click", () => {
    console.log("click en", iztapalapaSede)
    alumnasWild(ourData, "iztapalapa");

    //-- Guardar data para llevarla a dashboard --//
    let myData = "iztapalapa";
    localStorage.setItem('objectToPass', myData);

    //------ Función abrir sede en dashboard ------//
    localStorage.removeItem('objectToPass'); // Limpiar el localStorage
    window.location.href = "dashboard.html" // Abrir dashboard
    alumnasWild(ourData, "iztapalapa");
    console.log(myData)
});
//ajusco.generacion.primera.estudiantes
//Funcion para ingresar de screen 2 a 3 de forma dinámica(screen 3 recibe data de cada una de las sedes)
// Funcion pàra calcular el numero de alumnos registrados en la sede Ajusco
// Mostrar número de generaciones en Ajusco
// mostrar el promedio general del total de alumnos
// Funcion pàra calcular el numero de alumnos registrados en la sede Chapultepec
// Funcion pàra calcular el numero de alumnos registrados en la sede Iztapalapa