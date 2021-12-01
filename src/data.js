export const ourData = "../data/students.json";
let dataToArray = [];
let generacionPorSede = [];
let estudiantes = [];
/*const limpiarArray = () => {
    return generacionPorSede = [];
}*/
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
const traerSedes = (nuestraData) => {
  for (const key in nuestraData) {
    console.log(key);
    document.getElementById(
      "entrar-dashboard"
    ).innerHTML += `<button onclick="dashboard('${key}')"> ${key} </button>`;
  }
};

//ajusco.generacion.primera.estudiantes
//Funcion para ingresar de screen 2 a 3 de forma dinámica(screen 3 recibe data de cada una de las sedes)
// Funcion pàra calcular el numero de alumnos registrados en la sede Ajusco
// Mostrar número de generaciones en Ajusco
// mostrar el promedio general del total de alumnos
// Funcion pàra calcular el numero de alumnos registrados en la sede Chapultepec
// Funcion pàra calcular el numero de alumnos registrados en la sede Iztapalapa
