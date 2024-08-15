'use strict';

const userYear = parseInt(prompt("Ведіть ваш рік народження"));
const userCity = prompt("Ведіть із якого ви міста");
const userSport = prompt("Яким спортом ви займаєтесь?");

const showData = confirm("Вивести данні?");
const currentYear = new Date().getFullYear();

if(showData == true) {
    const userAge = currentYear - userYear;
    let result = "";
    result += `Ваш вік ${userAge} `;
    if (userCity == "Лондон" || userCity == "Київ" || userCity == "Вашингтон" ){
        result += `Ти живеш у столиці ${userCity} `;
    }else{
        result += `ти живеш у місті ${userCity} `;
    }

    let idol;
    if(userSport == "Футбол") idol = "як Шевченко";
    else if(userSport == "Бокс") idol = "як Усик";
    else if(userSport == "Фехтування") idol = "як Харлан";
    
    if (idol != null) result += `Круто! Хочеш стати ${idol}? `;
    else result += `${userSport} - гарний вибір!? `;

    alert(result);

} else {
    let result = "";
    if (userYear == null || userYear === "") {
        result += "Шкода, що Ви не захотіли ввести свій рік народження ";
    }
    if (userCity == null || userCity === "") {
        result += "Шкода, що Ви не захотіли ввести ваше місто ";
    }
    if (userSport == null || userSport === "") {
        result += "Шкода, що Ви не захотіли ввести свій улюблений спорт ";
    }
    alert(result);
}







