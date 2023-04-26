// function punto1(a,b){
//     var resultado = a+b;
//     return resultado
// }
// console.log(punto1(5,3));
// ---------------------------
// // crea una funcion pasa por parametros dos valores concantenados que de como resultado "hola soy" y tengo "años" muestra esa funcion 

// function punto2(nombre, edad) {
//     return "hola soy " + nombre + "tengo " + edad + "años "
// }
// console.log(punto2("mauricio ",22))
// -----------------------------
// declara una funcion dicha funcion tiene como resultado 2^3

// function punto3(base, exponente) {
//     return Math.pow(base,exponente)
// }
// console.log(punto3(2,3))
// --------------------------------------
function punto4(nombre) {
    if (nombre==="Español") {
        return "hola"
    }
    if (nombre==="Chino") {
        return "Chao"
    }
    if (nombre==="Portugues") {
        return "Ahola"
    } else {
        return "error"
    }
}
console.log(punto4("Español"))