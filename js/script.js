'use strict';
// Створити скрипт який має визначити середнє арифметичне трьох чисел з насутпними умовами:

//отримати від користувача через три prompt три числа
//показати через alert середнє арифметичне цих чисел  //

const numberFirst = prompt("Ведіть перше число");
const numberSecond = prompt("Ведіть друге число");
const numberThird = prompt("Ведіть третє число");

const result = (numberFirst + numberSecond + numberThird) / 3;
alert(result);

