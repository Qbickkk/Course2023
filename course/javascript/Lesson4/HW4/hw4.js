// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// const aa = 20;
// const bb = 50;
//
// function area(a, b) {
//     let result = a * b;
//     return result;
// }
//
// console.log(area(aa,bb));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function func(r, p) {
//     let radius = Math.PI * (r**2);
//     return radius;
// }
//
// const radiusCircle = func(5, 3.14);
// console.log(radiusCircle);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function areaCilindr(R,h) {
//     let pi = 3.14;
//     let area = 2 * pi * R* (R + h);
//     return area;
// }
//
// let result = areaCilindr(9,15);
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- створити функцію яка приймає масив та виводить кожен його елемент
// const mas = [22,354,'gosha', false, 45,'nickelodium'];
// function x(array) {
//     for (const items of array) {
//          console.log(`items : ${items}`);
//     }
// }
// x(mas);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph(argument) {
//     document.write(`<p>${argument}</p>`);
// }
// let result = paragraph(`bebebebeb`);
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function xxx(argument) {
//     document.write(`
//     <ul>
//          <li>${argument}</li>
//          <li>${argument}</li>
//          <li>${argument}</li>
//     </ul>
//     `);
// }
// xxx('viktory');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function xxx(text, numberOfLi) {
//     document.write(`<ul>`);
//     for (let i = 0; i < numberOfLi; i++) {
//          document.write(`<li>${text}</li>`);
//
//     }
//     document.write(`</ul>`);
// }
//
// xxx(`lolipop`, 598);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// const mas = [23, true, 'gigi', 345, 'oven', 'bottom', 'ice', false, 28];
// function xxx(arr) {
//     document.write(`<ul>`);
//     for (let i = 0; i < mas.length; i++) {
//         document.write(`<li>${mas[i]}</li>`)
//     }
//     document.write(`</ul>`);
// }
// xxx(mas);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// const mas = [
//     {id: 2845, name: 'Fransua', age: 23},
//     {id: 6792, name: 'Gloria', age: 78},
//     {id: 0932, name: 'Gektor', age: 12},
//     {id: 5924, name: 'Gustavo', age: 34},
//     {id: 7243, name: 'Sicasio', age: 27},
//     {id: 4298, name: 'Duveini', age: 37}
// ];
// function usersPrinter(arr) {
//     for (const user of arr) {
//         document.write(`<div>${user['id']} - ${user['name']} - ${user['age']} </div>`);
//     }
// }
//
// usersPrinter(mas);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка повертає найменьше число з масиву

// const mas = [1122,23,43,535,64646,34,6346,3656,2234,264];
// function Num(arr) {
//     let result = arr[0];
//     for (let i = 1; i < mas.length; i++) {
//         if (result > mas[i]){
//             result = mas[i];
//         }
//     }
//     return result;
// }
//
// const x = Num(mas)
// console.log(x);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


// const mas = [1,2,10];
//
// function sum(arr) {
//     let result = 0;
//     for (const item of arr) {
//         result += item;
//     }
//     return result;
// }
//
// console.log(sum(mas));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr,index1,index2) {

}
//sffsfdfsfsdf