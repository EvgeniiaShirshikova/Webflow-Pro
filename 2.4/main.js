// let x = 5;

// if (x > 10) {
//     console.log('условие верно');
// } else {
//     console.log('условие неверно');
// } 

// let a = 5;
// let b = '10';
// let result = a + +b;
// console.log(a.toString());

// console.log(result);

// console.log(typeof a);
// console.log(typeof b);

// let age = prompt('Укажите ваш возраст');
// let a = 10
// let res = +age + a

// console.log(res);

let titleProject = prompt('Название проекта?');
console.log(titleProject);

let screensValue = prompt('Укажите цифрру, соответсвующую желаемому типу экранов - 1. шаблонные, 2. с уникальным дизайном, 3. с анимациями');
console.log(screensValue);

let responsive = prompt('Нужен отзывчивый дизайн? Укажите true или false');
console.log(responsive);

let screenPrice = +prompt('Какая цена разработки экранов?');
console.log(screenPrice);

let service1 = prompt('Какой сервис нужен?');
console.log(service1);

let servicePrice1 = +prompt('Сколько это будет стоить?');
console.log(servicePrice1);

let service2 = prompt('Какой еще сервис тебе нужен?');
console.log(service2);

let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?');
console.log(servicePrice2);

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);

let percentage = 0.1;

let servicePercentPrice = Math.round(fullPrice*(1 - percentage));
console.log(servicePercentPrice);

if (fullPrice >= 50000) {
    console.log('скидка 10%');
} else if (fullPrice >= 20000) {
       console.log('скидка 5%');
} else if (fullPrice > 0) {
    console.log('скидка 0%');
} else {
    console.log('что-то пошло не так');
}




