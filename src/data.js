export const ourData = "../data/students.json";

export let alumnasWild = (ourData) => {
  fetch(ourData)
    .then((response) => response.json())
    .then((data) => wildCodeCamp(data))
    .catch((error) => console.log(error));
};

//Función para iterar datos
let wildCodeCamp = (data) => {
  console.log(data.ajusco.generacion.primera.estudiantes);
};
//Funcion para ingresar de screen 2 a 3 de forma dinámica (screen 3 recibe data de cada una de las sedes)
// Funcion pàra calcular el numero de alumnos registrados en la sede Ajusco
// Mostrar número de generaciones en Ajusco
// mostrar el promedio general del total de alumnos
// Funcion pàra calcular el numero de alumnos registrados en la sede Chapultepec
// Funcion pàra calcular el numero de alumnos registrados en la sede Iztapalapa
