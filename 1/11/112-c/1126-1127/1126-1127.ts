//
// Data Type Part 1
//
// 'number'
//
let _1: number = 12;
console.log(`Numero Decimal (base 10): "12" =`, _1);
//
let _2: number = 0x37cf;
console.log(`Numero Hexadecimal (base 16): "0x37cf" =`, _2);
//
let _3: number = 0o377;
console.log(`Numero Octal (base 8): "0c377" =`, _3);
//
let _4: number = 0b111000;
console.log(`Numero Binario (base 2): "0b111000" =`, _4);
//
// 'string'
//
var hw: string = "Hello World";
console.log(`Name (string):`, hw);
//
// 'boolean'
//
let booleanTrue: boolean = true;
console.log(`Boolean = True:`, booleanTrue);
//
let booleanFalse: boolean = false;
console.log(`Boolean = False:`, booleanFalse);
//
// 'void'
//
let nothing: void = undefined;
console.log(`Void = undefined:`, nothing);
// nothing = 10;  // No es posible reasignar un valor a una variable que fue asignada con un valor "undefined"
//
// 'null'
//
let _null = null;
console.log(`Null:`, _null);
// _null = 10;  // Tampoco es posaible reasignar un valor a una variable con un valor "null"
let _null2: null;
// _null2 = 10;  // Tampoco podemos asignarle un valor diferente de null a una variable con el tipo de datos null, solo recibe datos nulos.
// console.log(_null2);  // Si intentamos imprimir el valor de _null2, no es posible, ya que no hemos asignado un avlor a la varible
_null2 = null;
console.log(`Variable _null2`, _null2);
//
// 'undefined'
//
let undefinedLet = undefined;
console.log(`undefined:`, undefinedLet);
// undefinedLet = 10;  // funciona de forma similar a la svariables con valores nullos
// let undefinedLet2: undefined;
// undefinedLet2 = 10;  // Tampoco es posible asignar un valor diferente a las variables que contienen valores indefinidos
//
// never
//
let _never: never; // No es posible asignar un valor a una variable con el tipo de dato "never"
// _never = 10; // No es posible asignar un valor diferente a esta variable, ya que se suele usar en casos muy especificos
//
// 'any'
//
let _any: any;
_any = 10;
console.log(`Variable "any" con un valor numérico:`, _any);
_any = null;
console.log(`Variable "any" con un valor "null":`, _any);

//
// endcode
//
