//
// const variable
//
//
// #3 difference: const declaration are block scope
//
// const global scope
//
var varGloSco = 100; //
console.log("const global scope:", varGloSco);
//
// const function scope
//
function conFunSco() {
    console.log("const global scope", varGloSco);
    /*
    Las variables globales definidas con "const", tambien son validas dentro del scope de las funciones
    */
    // const varGloSco = 200;
    /*
    Si redefinimos la variable "varGloSco", dentro del scope de la función, entonces estamos definiendo una nueva variables, que solo existe dentro del scope de la función
    */
    var varFunSco = varGloSco;
    /*
    Definimos la variable "varFunSco" y le asignamos la variable "varGloSco" como valor, para evitar confuciones
    */
    if (true) {
        console.log("const function scope:", varFunSco);
    }
    console.log("const function scope", varFunSco);
}
//
console.log(conFunSco());
console.log("const global scope", varGloSco);
// 
// console.log(varFunSco);
/*
Esta Variable, no esiste en el scope global, solo dentro del scope de la función
*/
//
// endcode
//
