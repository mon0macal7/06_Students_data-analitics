export const ourData = "../data/students.json";

export let alumnasWild = (ourData, sede) => {
    fetch(ourData)
        .then((response) => response.json())
        .then((data) => wildCodeCamp(data, sede))
        //metodo de objeto para acceder a las keys,darle id a las imagenes: Object.keys(nombreDelObjeto)
        .catch((error) => console.log(error));
};


//--------------------Función pura para iterar datos-----------------------//
let wildCodeCamp = (data, sede) => {
    console.log(data[sede]);
};

//------------------------- Datos por Ajusco ------------------------------//
let ajuscoSede = document.getElementById("ajus")
ajuscoSede.addEventListener("click", function() {
    console.log("click en", ajuscoSede)
    alumnasWild(ourData, "ajusco");

    //------ Función abrir sede y recibir data -----------//
    let abrirAjusco = window.open("dashboard.html");
    abrirAjusco.document.write(ajusco)

});


//---------------------- Datos por Chapultepec ---------------------------//

let chapultepecSede = document.getElementById("chapu")
chapultepecSede.addEventListener("click", function() {
    console.log(chapultepecSede)

    let abrirChapu = window.open("dashboard.html");
    let traerDataChap = () => {
        abrirChapu.write(chapultepec)
        alumnasWild(ourData, "chapultepec");
    }
    traerDataChap()


});


//------ Función abrir sede y recibir data -----------//


//----------------------- Datos por Iztapalapa ---------------------------//

let iztapalapaSede = document.getElementById("ixtapa")
iztapalapaSede.addEventListener("click", function() {
    console.log(iztapalapaSede)
    alumnasWild(ourData, "iztapalapa");

    //------ Función abrir sede y recibir data -----------//
    let abrirIztapa = window.open("dashboard.html");
    let traerDataIzta = () => {
        abrirIztapa(ourData[iztapalapa])
    }
    traerDataIzta()
});
//ajusco.generacion.primera.estudiantes
//Funcion para ingresar de screen 2 a 3 de forma dinámica(screen 3 recibe data de cada una de las sedes)
// Funcion pàra calcular el numero de alumnos registrados en la sede Ajusco
// Mostrar número de generaciones en Ajusco
// mostrar el promedio general del total de alumnos
// Funcion pàra calcular el numero de alumnos registrados en la sede Chapultepec
// Funcion pàra calcular el numero de alumnos registrados en la sede Iztapalapa