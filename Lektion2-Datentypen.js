// Dokumentation zu den JavaScript Datentypen: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
//________________________________________________________________________________
// Widerholung. Die Sichtbarkeit und die Wirkungsbereiche der Variablen

// let a = 20
// const b = 200

// {
//   let a = 10
//   const b = 100
//   var c = 300
// //   console.log(a) // Ausgabe: 10 (lokale 'a'-Variable innerhalb des Blocks)
// //   console.log(b) // Ausgabe: 100 (lokale 'b'-Konstante innerhalb des Blocks)
// }

// console.log(a) // Ausgabe: 20 (globale 'a'-Variable)
// console.log(b) // Ausgabe: 200 (globale 'b'-Konstante)
// console.log(c) // Ausgabe: 300 (lokale 'c'-Variable)

//________________________________________________________________________________
// Widerholung. Unterschied zwischen const und let

//   let a = 10
//   const b = 100
//   // Neue Zuweisung an die Variable 'a' ist möglich, da sie mit let deklariert wurde
//   a = 20
//   // Versuch, die Konstante 'b' neu zuzuweisen, führt zu einem Fehler (Error)
//   // b = 200; // TypeError: Assignment to constant variable. 
//   console.log(a); // Ausgabe: 20 (neuer Wert der Variablen 'a')
//   console.log(b); // Ausgabe: 100 (Wert der Konstanten 'b' bleibt unverändert)

//________________________________________________________________________________
// JavaScript-Datentypen: Mehr Info hier => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

// 1. number  => für Zahlen jeder Art: Ganzzahlen oder Gleitkommazahlen.
// 2. bigint => für sehr große Zahlen.
// 3. string => für Zeichenketten. 
// 4. boolean => für wahr/falsch (true/false).
// 5. null => für unbekannte Werte.
// 6. undefined => für nicht zugewiesene Werte.
// 7. symbol => für eindeutige Bezeichner.
// 8. object => für komplexere Datenstrukturen.

// let number = 42              // Number
// let bigNumber = 12345678901234567890n // BigInt
// let string = "Hallo Welt"    // String
// let boolean = true           // Boolean
// let nothing = null           // Null => "object" (Das ist eine bekannte Eigenheit von JavaScript)
// let notDefined               // Undefined
// let symbol = Symbol('Beschreibung')  // Symbol => mit Hilfe von Symbol()
// let object = {                // Object
//   name: "Alice",
//   age: 30
// }
// let array = [1, 2, 3]        // Array, auch ein Object
// let func = function() {       // Function, auch ein Object
//   console.log("Hallo!")
// }

// // Operator "typeof" => prüft den Datentyp einer Variable.
// console.log(typeof number) // "number"
// console.log(typeof bigNumber) // "bigint"
// console.log(typeof string) // "string"
// console.log(typeof boolean) // "boolean"
// console.log(typeof nothing) // "object" (Das ist eine bekannte Eigenheit von JavaScript)
// console.log(typeof notDefined) // "undefined"
// console.log(typeof symbol) // "symbol"

// console.log(typeof object) // "object"
// console.log(typeof array) // "object"
// console.log(typeof func) // "function"

//________________________________________________________________________________
// Unterschied zwischen null und undefined

// //1) undefined
// let a
// let = doNothing = () => {}   // oder so: function doNothing() {}

// //2) null
// let b = null
// let person = {
//   name: "Alice",
//   age: null // Das Alter ist absichtlich auf null gesetzt, um die Abwesenheit eines Werts zu zeigen
// }

// console.log(a) // undefined
// console.log(doNothing()) // undefined
// console.log(b) // null
// console.log(person.age) // null







