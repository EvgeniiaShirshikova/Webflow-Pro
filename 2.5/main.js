
let percentage = 0.1;
let screenPrice = 10000;

let titleProject = prompt('Название проекта?');

let screensValue = +prompt('Укажите цифрру, соответствующую желаемому типу экранов - 1. шаблонные, 2. с уникальным дизайном, 3. с анимациями');

function getScreenPrice() {if (screensValue == 1) {
    screenPrice = 10000;
} else if (screensValue == 2) {
    screenPrice = 20000;
} else if (screensValue == 3) {
    screenPrice = 30000;
} else {
    alert('введено неверное значение, начните сначала');
}};
getScreenPrice();
console.log(screenPrice);

let responsive = prompt('Нужен отзывчивый дизайн? Укажите true или false');
let service1 = prompt('Какой сервис нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой еще сервис тебе нужен?');
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?');

let getAllServicePrices = function() {
    return servicePrice1 + servicePrice2;
};
let allServicePrices = getAllServicePrices();

function getFullPrice() {
    return screenPrice + allServicePrices;
};
let fullPrice = getFullPrice();

function getTitle() {
    return titleProject.slice(0,1).toUpperCase() + titleProject.slice(1).toLowerCase();
}
console.log(getTitle());

function getServicePercentPrices() {
    return Math.round(fullPrice*(1 - percentage));
}

let servicePercentPrice = getServicePercentPrices();
console.log(servicePercentPrice);

function showTypeOf() {
    console.log(typeof servicePercentPrice); 
}
showTypeOf();


function getRollbackMessage() {if (servicePercentPrice >= 50000) {
    alert('скидка 10%');
} else if (servicePercentPrice >= 20000) {
    alert('скидка 5%');
} else if (servicePercentPrice > 0) {
    alert('скидка 0%');
} else {
    alert('что-то пошло не так');
}};
getRollbackMessage();


