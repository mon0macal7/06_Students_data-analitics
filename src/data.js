let dataToArray = [];
let generacionPorSede = [];
let estudiantes = [];


/*const limpiarArray = () => {
    return generacionPorSede = [];
}*/

export const ourData = "../data/students.json";

export let alumnasWild = (ourData, sede) => {
    console.log(ourData)
    fetch(ourData)
        .then((response) => response.json())
        .then((data) => {

            wildCodeCamp(data, sede)
                // Pasar data a array vacío
            dataToArray.push(data)
            console.log(dataToArray)
        })
        .catch((error) => console.log(error));
};


//-------------------------- Función iterar datos --------------------------//
let wildCodeCamp = (data, sede) => {
    // console.log(data[sede]);
};

// ITERAR CON FOR OF ARRAY 

//ajusco.generacion.primera.estudiantes
//Funcion para ingresar de screen 2 a 3 de forma dinámica(screen 3 recibe data de cada una de las sedes)
// Funcion pàra calcular el numero de alumnos registrados en la sede Ajusco
// Mostrar número de generaciones en Ajusco
// mostrar el promedio general del total de alumnos
// Funcion pàra calcular el numero de alumnos registrados en la sede Chapultepec
// Funcion pàra calcular el numero de alumnos registrados en la sede Iztapalapa