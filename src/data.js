export const ourData = "../data/students.json"

export let alumnasWild = (ourData) => {
    fetch(ourData)
        .then((response) => response.json())
        .then((data) => wildCodeCamp(data))
        .catch((error) => console.log(error))
}

//Función para iterar datos
let wildCodeCamp = (data) => {
    console.log(data.ajusco.generacion.primera.estudiantes)
}