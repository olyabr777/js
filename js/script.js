'use strict';

const name = prompt("Введіть ім'я");
const age = prompt("Введіть ваш вік");

let likesProgramming = false;
if (window.confirm("Чи подобається вам програмувати?")) {
    likesProgramming = true;
}

console.log(name);
console.log(age);
console.log(likesProgramming);
console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(likesProgramming));

let greeting = `Привіт, ${name}`;
alert(greeting);

const numericAge = Number(age);
const nextAge = numericAge + 1;
console.log(nextAge);

let isAdult;

if (numericAge >= 18){
    isAdult = true;
}else{
    isAdult = false;
}

console.log(isAdult);
