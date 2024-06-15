// Einführung in JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction?retiredLocale=de

//________________________________________________________________________________
// Kommentare in JavaScript (1: Schift + //; 2: Schift + / + *; 3: Schift + cmd + /)

// 1. Dies ist ein einzeiliger Kommentar
// let a = 4;  // Dies ist ein weiterer einzeiliger Kommentar
// console.log(a)

/* 2. Dies ist ein
mehrzeiliger Kommentar. 
Dieser Kommentar kann über mehrere Zeilen gehen */

// 2.1. Dies ist ein
// mehrzeiliger Kommentar, der  
// durch die hervorgehobene Zeilen mit Hilfe von "Schift + cmd + /"
// auskommentiert und entkommentiert werden kann.

//________________________________________________________________________________
//Variablendeklaration (mit den Schlüsselwörtern let, var und const)

//1) var: (unerwartetes Verhalten! Veraltet! Nicht nutzen!)

// const example = () => {
//     var x = 10 
//     if (true) {
//         var x = 20
//         console.log(x)  // Output: 20
//     }
//     console.log(x) // Output: 20
// }
// console.log(example())


//2) let: 

// const example = () => {
//     let x = 10
//     if (true) {
//         let x = 20
//         console.log(x) // Output: 20
//     }
//     console.log(x) // Output: 10
// }
// console.log(example())

//3) const: 

// const example = () => {
//     const x = 10
//     if (true) {
//         const x = 20
//         console.log(x) // Output: 20
//     }
//     console.log(x) // Output: 10
// }
// console.log(example())

//________________________________________________________________________________
// Variablennamen oder Bezeichner.

// 1) aussagekräftig:
// const name = 'Ben'
// const customerName = "Bill"

// Falsch:
// const name = 5

// 2) CamelCase-Stil verwenden, wenn der Name aus mehreren Wörtern besteht:
// let userFirstName = 'John'
// let userAge = 24

// 3) englische Alphabet ist empfehlenswert. Schreib als Nomen in Singular.
// let number = 5
// console.log(number)

// 4) Zahlen sind erlaubt aber dürfen nicht am Anfang stehen.  Anfangen immer lieber mit Buchstaben!:
// const number1 = 1
// console.log(number1)

// Falsch:
// const 2number = 1
// console.log(2number)

// 5) Konstanten groß mit dem Unterstrich (_) für Wortertrennung:

// const USER = 'Tim'
// const USER_FIRST_NAME = 'Tim'

// 6) Unterstrich (_) und Dollarzeichen ($) sind erlaubt. Keine andere Sonderzeichen sind zu verwenden. In der Praxis beginnt der Variablenname jedoch in der Regel mit einem Buchstaben:

// let _number = 5
// console.log(_number)

// let $number = 10
// console.log($number)

// Besser: 
// let number = 5
// const NUMBER = 7

// console.log(number)
// console.log(NUMBER)

