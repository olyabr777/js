'use strict';

let value1 = parseFloat(prompt("Введіть перше значення:"));
let value2 = parseFloat(prompt("Введіть друге значення:"));

let sum = value1 + value2;
console.log(`Результат складання: ${sum}`);

let difference = value1 - value2;
console.log(`Результат віднімання: ${difference}`);

let multiplication = value1 * value2;
console.log(`Результат множення: ${multiplication}`);

if ( (value1 == 0) || (value2 == 0) ) {
    console.log("Ділення на нуль неможливо");
} else {
    let division = value1 / value2;
    console.log(`Результат ділення: ${division}`);
}