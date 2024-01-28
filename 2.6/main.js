let percentage = 0.1;
let screenPrice = 10000;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let newTitle;

let titleProject;
let screensValue;
let responsive;
let typeOf;
let service;
let serviceSecond;

const checkIsNumber = function(x) {
    return !isNaN(parseFloat(x)) && isFinite(x)
}

const asking = function() {
    titleProject = prompt('Название проекта?');
    screensValue = +prompt('Укажите цифрру, соответствующую желаемому типу экранов - 1. шаблонные, 2. с уникальным дизайном, 3. с анимациями');
    responsive = prompt('Нужен отзывчивый дизайн? Укажите true или false');
}

function getScreenPrice() {if (screensValue == 1) {
    screenPrice = 10000;
} else if (screensValue == 2) {
    screenPrice = 20000;
} else if (screensValue == 3) {
    screenPrice = 30000;
} else {
    alert('введено неверное значение, начните сначала');
}};

function getAllServicePrices() {
    let sum = 0
    for (let i = 0; i < 2; i++) {
        
        if (i === 0) {
            service = prompt('Какой дополнительный сервис нужен?', 'Услуга 1');
        } else if (i === 1) {
            serviceSecond = prompt('Какой дополнительный сервис нужен?', 'Услуга 2');
        }
        
        let textFromPrompt = '';

        while (!checkIsNumber(textFromPrompt) || textFromPrompt.trim() === '' || textFromPrompt === null) {
            textFromPrompt = prompt('Сколько это будет стоить?');
        }

        sum += Number(textFromPrompt);
    }

    return sum;
}


function getFullPrice() {
    return screenPrice + allServicePrices;
};

function getTitle() {
    return titleProject.slice(0,1).toUpperCase() + titleProject.slice(1).toLowerCase();
}

function getServicePercentPrices() {
    return Math.round(fullPrice*(1 - percentage));
}

function showTypeOf() {
    return typeof servicePercentPrice; 
}



function getRollbackMessage() {if (servicePercentPrice >= 50000) {
    alert('скидка 10%');
} else if (servicePercentPrice >= 20000) {
    alert('скидка 5%');
} else if (servicePercentPrice > 0) {
    alert('скидка 0%');
} else {
    alert('что-то пошло не так');
}};


asking();
getScreenPrice();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
newTitle = getTitle();
servicePercentPrice = getServicePercentPrices();
typeOf = showTypeOf();
getRollbackMessage();

console.log(screenPrice);
console.log(allServicePrices);
console.log(fullPrice);
console.log(newTitle);
console.log(servicePercentPrice);
console.log(typeOf);