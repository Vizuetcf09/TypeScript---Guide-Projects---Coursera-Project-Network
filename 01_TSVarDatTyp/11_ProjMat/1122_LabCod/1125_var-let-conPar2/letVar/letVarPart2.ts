//
// let variable
//
//
// #3 difference: let are block scope
//
// let global scope
//
var varGloSco = 100; //
console.log("let global scope:", varGloSco);
//
// let function scope
//
function letFunSco() {
  console.log("let global scope", varGloSco);
  /* 
  Es posible imprimir el valor de la variable "varGloSco" definida en el scope global, dentro del scope de la función
  */

  varGloSco = 200;
  /* 
  Si queremos actualizar el valor de la variable "letGloSco", dentro del scope de la función, lo podemos hacer de dos formas,, ya sea que no usemos "let", pero si hacemos eso, entonces nos daria un error, al imprimir la variable antes de definirla, ya que estariamos re-definiendo la variable dentro del scope de la función, pero no en el scope global
  */

  let varFunSco = varGloSco;
  /* 
  Definimos la variable "varFunSco" y le asignamos la variable "varGloSco" como valor, para evitar confuciones 
  */

  if (true) {
    console.log("let function scope:", varFunSco);
  }
  console.log("let function scope", varFunSco);
}
//
console.log(letFunSco());
console.log("let global scope", varGloSco);
// 
// console.log("let global scope", varFunSco);
/* 
La variable "varFunSco", no se imprime, ya que no esta definida en el scope global, pero si dentro del scope de la función, y no es posible acceder a ella de esta forma, a menos que la definamos en el scope global tambien
*/
//
// endcode
//
