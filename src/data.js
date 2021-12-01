export const ourData = "../data/students.json";
let dataToArray = [];
let generacionPorSede = [];
let estudiantes = [];
/*const limpiarArray = () => {
    return generacionPorSede = [];
}*/



//función limpiar generacion
export const cleanGeneration = () => {
    document.getElementById("generations").innerHTML = "";
}


export const alumnasWild = () => {
    fetch(ourData)
        .then((response) => response.json())
        .then((data) => {
            traerSedes(data);
            // wildCodeCamp(data, sede)
            // Pasar data a array vacío
            dataToArray.push(data);
            console.log(dataToArray);
        })
        .catch((error) => console.log(error));
};
//-------------------------- Función iterar datos --------------------------//
//------------ Traer llaves ----------------//
export const traerSedes = (nuestraData) => {
    console.log(nuestraData);

    for (const key in nuestraData) {
        console.log(key);
        document.getElementById(
            "entrar-dashboard"
        ).innerHTML += `<button onclick="dashboard.generacion('${key}')"> ${key} </button>`;
    }
};

//funcion para traer generaciones
export const traerGene = (sede) => {

    for (const generacion in dataToArray[0][sede].generacion) {

        console.log(generacion);
        document.getElementById(
            "generations"
        ).innerHTML += `<a onclick="dashboard.traerGene('${generacion}')"class="d-block text-light p-3"
><i class="fas fa-user-graduate mr-2 lead"></i>${generacion} generación</a>`
    }

};


//funcion para limpiar generacion anterior

/*console.log(sede); //muestra las generaciones al dar click
        }
        document.getElementById("sede").innerHTML = `<h1>Campus ${sede}</h1> </h2>Generaciones: </h2>`
        generacionPorSede.push(arrBruto[0][sede].generacion)*/

//ajusco.generacion.primera.estudiantes
//Funcion para ingresar de screen 2 a 3 de forma dinámica(screen 3 recibe data de cada una de las sedes)
// Funcion pàra calcular el numero de alumnos registrados en la sede Ajusco
// Mostrar número de generaciones en Ajusco
// mostrar el promedio general del total de alumnos
// Funcion pàra calcular el numero de alumnos registrados en la sede Chapultepec
// Funcion pàra calcular el numero de alumnos registrados en la sede Iztapalapa