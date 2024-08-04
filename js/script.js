'use strict';

const numberFirst = parseFloat(prompt("Введіть перше значення:"));
const numberSecond = parseFloat(prompt("Введіть друге значення:"));

const sum = numberFirst + numberSecond;
console.log(`Результат складання: ${sum}`);

const difference = numberFirst - numberSecond;
console.log(`Результат віднімання: ${difference}`);

const multiplication = numberFirst * numberSecond;
console.log(`Результат множення: ${multiplication}`);

if ( (numberFirst == 0) || (numberSecond == 0) ) {
    console.log("Ділення на нуль неможливо");
} else {
    const division = numberFirst / numberSecond;
    console.log(`Результат ділення: ${division}`);
}