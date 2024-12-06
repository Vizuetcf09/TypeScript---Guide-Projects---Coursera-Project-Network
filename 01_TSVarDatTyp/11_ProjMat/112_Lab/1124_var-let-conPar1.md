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
# Differences between `var` vs `let` vs `const` Part 1

La siguiente tabla muestra las diferencias entre las variables.

**Table 1.1.2.4.1**. `var` vs `let` vs `const`.

| `var`                                     | `let`                                     | `const`                                 |
| ----------------------------------------- | ----------------------------------------- | --------------------------------------- |
| Can de declared without being initilised. | Can de declared without being initilised. | Must be initialised during declaration. |
| Can be re-declared and update             | Can be update but cannot be re-declared.  | Cannot be update or re-declared         |
| Are function scoped/global scope          | Are block scope                           | Declaration are block scope             |
# Diferencias al declarar variables: `var` vs `let` vs `const`.

## Variables `var`

### #1 difference:

> [!Note] #### `var` variables can de declared without being initilised.

**Example**:

```typescript
//
// var variable
//
// #1 diferrence: var can be declared without being initialized.
//
var varName1: string;
//
// endcode
//
```
### #2 difference:

> [!Note] #### `var` variables can be re-declared and update.
#### Inittilised

**Example**:

```typescript
//
// var variable
//
// #2 difference: var variables can be re-declared and update
//
// var Inittialised
//
var varName1: string = "Inittialised";
//
console.log("var variable Inittialised:", varName1);  // output: "var variable Inittialised: Inittialised"
//
// endcode
//
```

#### Update

**Example**:

```typescript
//
// var variable
//
// #2 difference: var variables can be re-declared and update
//
// var Update
//
var varName1 = "Update";
//
console.log("var variable Update:", varName1);  // output: "var variable Update: Update"
//
// endcode
//
```
#### Re-declared

**Example**:

```typescript
//
// var variable
//
// #2 difference: var variables can be re-declared and update
//
// var Re-declared
//
var varName1: string = "Re-declared";

console.log("var variable Re-declared:", varName1);  // output: "var variable Re-declared: Re-declared"
//
// endoce
```
## Variables `let`

### #1 difference:

> [!Note] #### `let` variables can de declared without being initilised.

**Example**:

```typescript
//
// let variable
//
// #1 diferrence: let can be declared without being initialized.
//
var letName1: string;
//
// endcode
//
```
### #2 difference:

> [!Note] #### `let` variables can be update but cannot be re-declared.
#### Inittilised

**Example**:

```typescript
//
// let variable
//
// #2 difference: let variables can be update but cannot be re-declared
//
// let Inittialised
//
var letName1: string = "Inittialised";
//
console.log("let variable Inittialised:", letName1);  // output: "let variable Inittialised: Inittialised"
//
// endcode
//
```

#### Update

**Example**:

```typescript
//
// #2 difference: let variables can be update but cannot be re-declared
//
// let update
//
/*
No es posible actualizar las variables let, del mismo modo que las variables var:

let name22 = "Update";  
*/
//
letName1 = "Update";
//
console.log("let variable Update:", letName1);  // output: "let variable Update: Update"
//
// endcode
//
```
## Variables `const`

> [!Note] #### `const` variables must de initialised during declaration.

**Example**:

```typescript
//
// const variable
//
// #1 diferrence: const can be declared without being initialized.
//
const constName1: string = "Inittialised";
//
// endcode
//
```

> [!Note] #### `const` variables cannot be update or re-declared.

---
# Intruction Link

1. [var vs let vs const part 1](https://www.coursera.org/learn/typescript-variables-and-data-types/ungradedLab/91nRX/typescript-variables-and-data-types/lab?path=%2F)