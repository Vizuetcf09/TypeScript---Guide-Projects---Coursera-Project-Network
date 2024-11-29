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
  - 1.1.2.4 - var vs let vs const Part 1
Intructor:
  - Chaitra Deshpande
Level:
  - Begginer
Institution:
  - Coursera Project Network
State:
---
# `var` vs `let` vs `const`

La siguiente tabla muestra las diferencias entre las variables.

**Table 1.1.2.4.1**. `var` vs `let` vs `const`.

| `var`                                     | `let`                                     | `const`                                 |
| ----------------------------------------- | ----------------------------------------- | --------------------------------------- |
| Can de declared without deing initilised. | Can de declared without deing initilised. | Must de initialised during declaration. |
| Can be re-declared and update             | Can be update but cannot be re-declared.  | Cannot be update or re-declared         |
| Are function scoped/global scope          | Are block scope                           | Declaration are block scope             |
## Diferencias al declarar variables: `var` vs `let` vs `const`.

### Variables `var`

> [!Note] #### `var` variables can be re-declared and update


```typescript
//
// start-code
//
// Declare var variable
//
var name1: string;
//
// var variables can be re-declared and update
//
// var Inittialised
//
var name11: string = "Inittialised";

console.log("var: name11 Inittialised:", name11);  / output: "var: name11 Inittialised: Inittialised"
//
// var Update
//
var name11 = "Update";

console.log("var: name11 Update:", name11);  / output: "var: name11 Inittialised: Update"
//
// var Re-declared
//
var name11: string = "Re-declared";

console.log("var: name11 Re-declared:", name11);  / output: "var: name11 Inittialised: Update"
//
// endoce
```

>[!Note] #### Exercises Code
>
> - 

---
# Intruction Link

1. [var vs let vs const part 1](https://www.coursera.org/learn/typescript-variables-and-data-types/ungradedLab/91nRX/typescript-variables-and-data-types/lab?path=%2F)