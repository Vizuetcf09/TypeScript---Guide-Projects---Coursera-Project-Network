//
// var vs let cs const
//
// var
//
// var variables can de declared without deing initilised.
//
var name1: string;
//
// var variables can be be re-declared and update
//
var name11: string = "Inittialised";
console.log("var: name11 Inittialised:", name11);
var name11 = "Update";
console.log("var: name11 Update:", name11);
var name11: string = "Re-declared";
console.log("var: name11 Re-declared:", name11);
//
//
// var scope
//
// var variables are function scope/global scope
//
var xvar = 100; //
console.log("var: xvar (global scope):", xvar);
//
function xFunctionScope() {
  // console.log("var global scope", x);
  var x = 200; // var: x function scope

  if (true) {
    console.log("var: xvar function scope:", xvar);
  }
  console.log("var: xvar (function scope)", xvar); // var: x function scope
}
//
console.log(xFunctionScope());
console.log("var: xvar (global scope)", xvar);
//

//
// let
//
// let variables can de declared without being initilised.
//
let name2: string;
console.log((name2 = "Inittialised name2"));
//
// let variables can be update but cannot be re-declared.
//
let name22: string = "Inittialised let name22";
console.log("let name22 Inittialised:", name22);
// let name22 = "Update";
name22 = "Update";
console.log("let name22 Update:", name22);
// let name22: string = "Re-declared";
// console.log("var Re-declared:", name11);
//
// let scope
//
// let variables are block scope
//
let xlet = 100; //
console.log("var: xlet (global scope):", xlet);
//
function x1FunctionScope() {
  // console.log("var global scope", x);
  let x1 = 200; // var: x function scope

  if (true) {
    console.log("let: xlet function scope:", x1);
  }
  console.log("let: xlet (function scope)", xlet); // var: x function scope
}
//
console.log(x1FunctionScope());
console.log("let: xlet global scope", xlet);
//

//
// const
//
// const variables must de initialised during declaration.
//
const name3: string = "Inittialised const name3";
//
// const variables cannot be update or re-declared
//
const name33: string = "Inittialised const name33";
console.log("const: Inittialised:", name33);
// const name33 = "Update";
// name33 = "Update"
// console.log("const Update:", name11);
// const name33: string = "Re-declared";
// console.log("const Re-declared:", name11);
//
// const scope
//
// const variables declaration are block scope
//
const xconst = 100; //
console.log("const: xconst (global scope) (1):", xconst);
//
function x2FunctionScope() {
  // console.log("const: xconst (global scope) (2)", xconst);
  const xconst = 200; // const: x function scope
  xvar;
  console.log("const: xconst (function scope) (1)", xconst);
  if (true) {
    console.log("const: xconst (function scope) (1):", xconst);
  }
  console.log("const: xconst (global scope) (3):", xconst); // const: x function scope
}
//
console.log(x2FunctionScope());
console.log("const: xconst (global scope) (4)", xconst);
//
