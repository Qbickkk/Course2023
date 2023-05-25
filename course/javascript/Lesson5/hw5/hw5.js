// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let x = (a,b) =>  a*b;
// console.log(x(5, 10));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let x = (r) => Math.PI * r**2;
// console.log(x(5));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let x = (h,r) => 2 * Math.PI * r * h;
// console.log(x(10,4));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка приймає масив та виводить кожен його елемент
// let x = (arr) => {
//     for (const element of arr) {
//         console.log(element);
//     }
// }
// x([1, 2, 3, 4, 5, 6, 8]);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let paragraph = (text) => {
//     document.write(`<p>${text}</p>`);
// }
// paragraph('jaba');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let x = (text) => {
//     document.write(`<ul>`);
//         document.write(`<li>  ${text}  </li>`);
//         document.write(`<li>  ${text}  </li>`);
//         document.write(`<li>  ${text}  </li>`);
//     document.write(`</ul>`);
// }
// console.log(x('hello kitty'));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let x = (text, num) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// x('busido', 23);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let x = (arr) => {
//     document.write(`<ul>`);
//         for (const element of arr) {
//             document.write(`<li>${element}</li>`);
//         }
//     document.write(`</ul>`);
// }
// x([12,3,'fgihdfgh',true,34,'ssstring',false]);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// const mas = [
//     {id: 2845, name: 'Fransua', age: 23},
//     {id: 6792, name: 'Gloria', age: 78},
//     {id: 0932, name: 'Gektor', age: 12},
//     {id: 5924, name: 'Gustavo', age: 34},
//     {id: 7243, name: 'Sicasio', age: 27},
//     {id: 4298, name: 'Duveini', age: 37}
// ];
//
// let x = (arr) => {
//     for (const element of arr) {
//         document.write(`<div> ${element.id} - ${element.name} - ${element.age}</div>`);
//     }
// }
// x(mas);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка повертає найменьше число з масиву
