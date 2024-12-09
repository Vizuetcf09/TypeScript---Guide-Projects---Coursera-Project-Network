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
  - 1.1.2.4 - var vs let vs const Part 2
Intructor:
  - Chaitra Deshpande
Level:
  - Begginer
Institution:
  - Coursera Project Network
State: true
---
# Differences between `var` vs `let` vs `const` Part 2

**Table 1.1.2.4.1**. `var` vs `let` vs `const`.

| `var`                                     | `let`                                     | `const`                                 |
| ----------------------------------------- | ----------------------------------------- | --------------------------------------- |
| Can de declared without deing initilised. | Can de declared without deing initilised. | Must de initialised during declaration. |
| Can be be re-declared and update          | Can be update but cannot be re-declared.  | Cannot be update or re-declared         |
| Are function scoped/global scope          | Are block scope                           | Declaration are block scope             |
# The Difference Between of `var`, `let` and `const` Global and Function Scopes

## Variables `var`

### #3 difference:

> [!Note] #### `var` variables are function scoped/global scope.

```typescript
//
// var variables
//
// #3 difference: var are function scoped and global scope
//
// "example1" functions
//
function example1() {
  if (true) {
    var x = 100;
	console.log(x);  // block scoped
  }
  console.log(x);  // function scoped
}
//
console.log(example1());
//
// endcode
//
```

Las variables declaradas con `var`, dentro del scope de bloque, como en el caso de la variable `x`, es posible acceder a ella dentro del scope de  la función `example1`, ya que el bloque en el que fue declarada, existe dentro del scope de la función, pero si quisiéramos acceder a ella fuera del scope de la función, en el scope global, nos daría un error, ya que esa variable no existe en el scope global, solo existe dentro del scope de la función, para acceder a ella desde el scope global, primero deberíamos declararla primero en el scope global, y después seria posible acceder a ella en cualquier scope, ya sea dentro del scope de la función, o dentro del scope de bloque que se encuentra dentro de la función, o sea, seria accesible desde cualquier scope.

## Variables `let`

### #3 difference:

> [!Note] #### `let` variables are block scope.

```typescript
//
// let variables
//
// #3 difference: let are block scope
//
// "example2" function
// 
function example2() {
  if (true) {
    let x = 100;
    console.log(x);  // only block scoped
  }
  // uncomment below to demostrate error
  // console.log(x);  // error: cannot find name "x" | not function scoped
}
// 
console.log(example2());
//
// endcode
//
```

Las variables declaradas con `let` dentro de un scope de bloque, aunque esten dentro del mismo scope de la función, no son accesibles a ellas en el scope de la función, para ellos, deberia ser declarada ya sea dentro del scope de la función, pero fuera del scope de bloque, o desde el scope global, de esta ultima forma, seria accesible desde cualquier scope que este por "debajo" del scope global.

## Variables `const`

### #3 difference:

> [!Note] #### `const` variables aare block scope.

```typescript
//
// const variables
//
// #3 difference: const declaration are block scope
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
```

Las variables declaradas con `const`, funcionan igual que las variables declaradas con let, son accesibles a ellas desde cualquier scope siempre que sean declaradas dentro del scope global, pero no son accesibles a ellas desde un "nivel superior" de scope al que fueron declaradas, solo desde un scope "menor" al que fueron declaradas originalmente.

---
# Intruction Link

1. [var vs let vs const part 2](https://www.coursera.org/learn/typescript-variables-and-data-types/ungradedLab/91nRX/typescript-variables-and-data-types/lab?path=%2F)