export const ourData = "../data/students.json";

export let alumnasWild = (ourData, sede) => {
    fetch(ourData)
        .then((response) => response.json())
        .then((data) => wildCodeCamp(data, sede))
        //metodo de objeto para acceder a las keys,darle id a las imagenes: Object.keys(nombreDelObjeto)
        .catch((error) => console.log(error));
};

//Función para iterar datos
let wildCodeCamp = (data, sede) => {
    console.log(data[sede]);
};

document.addEventListener("click", function() {
    document.getElementById("ajus")
    alumnasWild(ourData, "ajusco");
});

//ajusco.generacion.primera.estudiantes
//Funcion para ingresar de screen 2 a 3 de forma dinámica(screen 3 recibe data de cada una de las sedes)
// Funcion pàra calcular el numero de alumnos registrados en la sede Ajusco
// Mostrar número de generaciones en Ajusco
// mostrar el promedio general del total de alumnos
// Funcion pàra calcular el numero de alumnos registrados en la sede Chapultepec
// Funcion pàra calcular el numero de alumnos registrados en la sede Iztapalapa