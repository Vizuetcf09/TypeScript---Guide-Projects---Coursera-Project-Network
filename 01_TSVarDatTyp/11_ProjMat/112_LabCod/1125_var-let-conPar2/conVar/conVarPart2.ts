//
// const variable
//
//
// #3 difference: const declaration are block scope
//
// const global scope
//
const constGloSco = 100;
/* Una ves definida la constante "constGloSco" en un archivo en el mismo proyecto, el nombre de esa constante no puede ser utilizado en nungun otro archivo dentro del mismo proyecto */
//
console.log("const global scope:", constGloSco);
//
// const function scope
//
function conFunSco() {
  console.log("const global scope", constGloSco);
  /* 
  Las constantes globales definidas con "const", tambien son validas dentro del scope de las funciones  
  */

  // const constGloSco = 200;
  /* 
  Si redefinimos la constante "constGloSco", dentro del scope de la función, entonces estamos definiendo una nueva constante, que solo existe dentro del scope de la función
  */

  const constFunSco = constGloSco;
  /* 
  Definimos la constante "constGloSco" y le asignamos la variable "varGloSco" como valor, para evitar confuciones 
  */

  if (true) {
    console.log("const function scope:", constFunSco);
  }
  console.log("const function scope", constFunSco);
}
//
console.log(conFunSco());
console.log("const global scope", constGloSco);
//
// console.log(constFunSco);
/*
Esta Variable, no esiste en el scope global, solo dentro del scope de la función
*/
//
// "example3" function
// 
function example3() {
  if (true) {
    const x = 100;
    console.log(x);  // only block scoped
  }
  // console.log(x);  // error: cannot find name "x" | not function scoped
}
// 
console.log(example3());
//
// endcode
//
