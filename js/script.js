'use strict';

// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
}

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

for (let i = 10; i <= 100; i += 10) {
    console.log(i * 27);
}

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

const number = parseInt( prompt("натуральне число") );
for (let i = 1; i <= 100; i++){
    let pow = Math.pow(i, 2);
    if (pow <= number) console.log(i);
}


//Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else if (number === 2) {
    isPrime = true;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(number + " є простим числом");
} else {
    console.log(number + " не є простим числом");
}

//Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let powerOfThree = 1;

while (powerOfThree < number) {
    powerOfThree *= 3;
}

if (powerOfThree === number) {
    console.log(number + " можна отримати ");
} else {
    console.log(number + " не можна отримати");
}
