---
Author:
  - Vizuet Cruz Fernando Ivan
Course:
  - TypeScript Variables and Data Types
Module:
  - Project Material
Lab:
  - Project-based Course Overview
Instruction:
  - 1.1.2.2 - Variable Declarations 1
  - 1.1.2.3 - Different ways of Variables Declaration
Intructor:
  - Chaitra Deshpande
Level:
  - Begginer
Institution:
  - Coursera Project Network
State: true
---
# How TypeScript run in the browser

- TS cannot run directly in the browser, it has to be converted into JS code.
- A TS code is written in a file with a ``.ts`` extension and then compiled to JS using the TS compiler.
- A TS can be written in any code editor (VS Code, Sublime Text, Vim, etc.)
- A TS compiler (**Image 1.2.2.1**) needs to de installed on your platform, once installed, the command (wich compiles the TS code into a plain JS file):

```plaintext
tsc <filename>.ts
```

- JS file can then be include in the HTML and run on any browser.

![[Image1121 - TypeScript compiler.png]] 
**Image 1.2.2.1**: TypeScript compiler.
# How to declare variables in TypeScript?

En TS, podemos declarar variables de la siguiente forma:

```typescript
var message : string = "Heelo World"; 
```

La anterior línea de código esta formada por diferentes componentes (**Image 1.1.2.2.1**):

1. `var`: Declaración de la variable.
2. `message`: Nombre de la variable. 
3. `:`: Anotación del tipo de datos de TS.
4. `string`: Tipo de dato.
5. `=`: Operador de asignación (signo de igualdad).
6. ``"Hello World"``: Valor inicial (inicialización).
![[Image1122 - How to Desclare Variables in TypeScript.png]]
**Image 1.1.2.2.1**. How to Desclare Variables in TypeScript.

# How to assign value to a variable with assignment operator `=`

La asignación de un valor se realiza con el operador de asignación: `=`, todo aquello que este después de este operador, es el valor asignado, para una variable, pueden ser números, cadenas de caracteres, boléanos, etc.

```typescript
var message : string = "Vizuet";  // Declaration
```

# Different Ways to Declare Variables

## How to declare variables in TS. 

There are 4 ways to declare initial value:

1. Both type and initial value

```typescript
//
// 1. Both: type and initial value
//
var a :  number = 1;  // type and initial value
//
console.log(a);
//
// endcode
//
```

2. Only type

```typescript
//
// 2. Only type
//
let b: number; // only type
b = 2;
//
console.log(b);
//
// endcode
//
```

3. Only the initial value

```typescript
//
// 3. Only the initial valuee
//
let c = 3; // only initial value
//
console.log(c);
//
// endcode
//
```

4. Without the type and the initial value

```typescript
//
// 4. Both: type and initial value
//
let d; // without type and initial value
d = 4;
//
console.log(d);
//
// endcode
//
```

---
# Intruction Link

1. [Varible Declaration 1](https://www.coursera.org/learn/typescript-variables-and-data-types/ungradedLab/91nRX/typescript-variables-and-data-types/lab?path=%2F)
2. [Different ways of Variables Declaration](https://www.coursera.org/learn/typescript-variables-and-data-types/ungradedLab/91nRX/typescript-variables-and-data-types/lab?path=%2F)