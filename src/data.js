export const ourData = "../data/students.json"

export let alumnasWild = (ourData) => {
    fetch(ourData)
        .then((response) => response.json())
        .then((data) => wildCodeCamp(data))
        .catch((error) => console.log(error))
}

//Función para iterar datos del JSON
let wildCodeCamp = (data) => {
    console.log(data.ajusco)
        /*for (const each of data.ajusco) {
        console.log(each)
        }*/
}