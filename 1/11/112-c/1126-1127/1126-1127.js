//
// Data Type Part 1
//
// 'number'
//
var _1 = 12;
console.log("Numero Decimal (base 10): \"12\" =", _1);
//
var _2 = 0x37cf;
console.log("Numero Hexadecimal (base 16): \"0x37cf\" =", _2);
//
var _3 = 255;
console.log("Numero Octal (base 8): \"0c377\" =", _3);
//
var _4 = 56;
console.log("Numero Binario (base 2): \"0b111000\" =", _4);
//
// 'string'
//
var hw = "Hello World";
console.log("Name (string):", hw);
//
// 'boolean'
//
var booleanTrue = true;
console.log("Boolean = True:", booleanTrue);
//
var booleanFalse = false;
console.log("Boolean = False:", booleanFalse);
//
// 'void'
//
var nothing = undefined;
console.log("Void = undefined:", nothing);
// nothing = 10;  // No es posible reasignar un valor a una variable que fue asignada con un valor "undefined"
//
// 'null'
//
var _null = null;
console.log("Null:", _null);
// _null = 10;  // Tampoco es posaible reasignar un valor a una variable con un valor "null"
var _null2;
// _null2 = 10;  // Tampoco podemos asignarle un valor diferente de null a una variable con el tipo de datos null, solo recibe datos nulos.
// console.log(_null2);  // Si intentamos imprimir el valor de _null2, no es posible, ya que no hemos asignado un avlor a la varible
_null2 = null;
console.log("Variable _null2", _null2);
//
// 'undefined'
//
var undefinedLet = undefined;
console.log("undefined:", undefinedLet);
// undefinedLet = 10;  // funciona de forma similar a la svariables con valores nullos
// let undefinedLet2: undefined;
// undefinedLet2 = 10;  // Tampoco es posible asignar un valor diferente a las variables que contienen valores indefinidos
//
// never
//
var _never; // No es posible asignar un valor a una variable con el tipo de dato "never"
// _never = 10; // No es posible asignar un valor diferente a esta variable, ya que se suele usar en casos muy especificos
//
// 'any'
//
var _any;
_any = 10;
console.log("Variable \"any\" con un valor num\u00E9rico:", _any);
_any = null;
console.log("Variable \"any\" con un valor \"null\":", _any);
//
// endcode
//
