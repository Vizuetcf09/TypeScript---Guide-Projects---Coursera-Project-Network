//
// var variable
//
//
// #3 difference: var are function scoped and global scope
//
// var global scope
//
var varGloSco = 100; //
console.log("var global scope:", varGloSco);
//
// var function scope
//
function varFunSco() {
    // console.log("var global scope", varGloSco);
    /*
    si intentamos imprimir el resultado de la variable "varGloSco", en el scope de la función, obtendremos el siguiente error:
    
    Variable 'varGloSco' is used before being assigned
    
    ya que la variable "varGloSco", no existe en el scope de la función, pero si en el scope global
    */
    var varGloSco = 200;
    /*
    La variable "varGloSco" definida globalmente no se actualiza con este nuevo valor, sino que se define una nueva variable con el mismo nombre, pero que solo esta presente en el scope de la función "funSco"
    */
    var varFunSco = varGloSco;
    /*
    Definimos la variable "varFunSco" y le asignamos la variable "varGloSco" como valor, para evitar confuciones
    */
    if (true) {
        console.log("var function scope:", varFunSco);
    }
    console.log("var function scope", varFunSco);
}
//
console.log(varFunSco());
console.log("var global scope", varGloSco);
//
// endcode
//
