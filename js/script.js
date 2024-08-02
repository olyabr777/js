'use strict';

// Prompt the user for two operands
let value1 = parseFloat(prompt("Enter the first value:"));
let value2 = parseFloat(prompt("Enter the second value:"));

let sum = value1 + value2;
console.log(`Результат складання: ${sum}`);

let difference = value1 - value2;
console.log(`Результат віднімання: ${difference}`);

let multiplication = value1 * value2;
console.log(`Результат множення: ${multiplication}`);

// Perform division
if ( (value1 == 0) || (value2 == 0) ) {
    console.log("Ділення на нуль неможливо");
} else {
    let division = value1 / value2;
    console.log(`Результат ділення: ${division}`);
}