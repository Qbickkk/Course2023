// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
//  Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
//////////////////////////////////////////////////////////////////////////////////



// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

const massive = [2,34,'hello', 'okten', true,1337,556,false,'genios','loop'];
console.log(massive[0]);
console.log(massive[1]);
console.log(massive[2]);
console.log(massive[3]);
console.log(massive[4]);
console.log(massive[5]);
console.log(massive[6]);
console.log(massive[7]);
console.log(massive[8]);
console.log(massive[9]);
console.log(massive.length);
//////////////////////////////////////////////////////////////////////////////////

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

const obj1 = {
    title: 'book1',
    pageCount: 123,
    genre: 'horror'
}

const obj2 = {
    title: 'book2',
    pageCount: 1337,
    genre: 'roman'
}

const obj3 = {
    title: 'book3',
    pageCount: 339,
    genre: 'drama'
}

console.log(obj1);
console.log(obj2);
console.log(obj3);

//////////////////////////////////////////////////////////////////////////////////

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

const book1 = {
    title: 'BOOK1',
    pageCount: 223,
    genre: 'roman',
    authors: [
        {name: 'Viktor',age:24},
        {name: 'Daniel',age:28}
    ]
};
//////////////////////////////////////////////////////////////////////////////////

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

const mas = [
    {name:'Viktor',username: 'viktor322',password:'gigikor37'},
    {name: 'Alina', username: 'alindosik', password: 'ert345'},
    {name: 'Anna', username: 'ann43', password: 'ghj393'},
    {name: 'Tamara', username: 'tomochka23', password: 'afs787'},
    {name: 'Dima', username: 'taper', password: 'rtt443'},
    {name: 'Rita', username: 'torpeda', password: 'vcx344'},
    {name: 'Denis', username: 'denchik', password: 'sdf555'},
    {name: 'Sergey', username: 'BigBoss', password: 'ccc322'},
    {name: 'Angela', username: 'wwe', password: 'cdd343'},
    {name: 'Irina', username: 'irka7', password: 'kkk222'},
];
console.log(mas[0]['password']);
console.log(mas[1]['password']);
console.log(mas[2]['password']);
console.log(mas[3]['password']);
console.log(mas[4]['password']);
console.log(mas[5]['password']);
console.log(mas[6]['password']);
console.log(mas[7]['password']);
console.log(mas[8]['password']);
console.log(mas[9]['password']);

//////////////////////////////////////////////////////////////////////////////////

// - Є змінна х, якій ви надаєте довільне числове значення.
//  Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

const x = 0;

if (x !== 0){
    console.log('Вірно');
}else{
    console.log('Невірно');
}

//////////////////////////////////////////////////////////////////////////////////

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

const time = 446;

if (time >= 0 && time <= 15){
    console.log(1);
}else if(time >= 16 && time <= 30){
    console.log(2);
}else if(time >= 31 && time <= 45){
    console.log(3);
}else if (time >= 46 && time <= 59){
    console.log(4);
}else{
    console.log('Wrong number');
}

//////////////////////////////////////////////////////////////////////////////////

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

const day = 3;

if (day >= 1 && day < 10){
    console.log(1);
}else if (day >=10 && day < 20){
    console.log(2);
}else if (day >=20 && day < 31){
    console.log(3);
}else {
    console.log('Wrong number');
}

//////////////////////////////////////////////////////////////////////////////////

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

const dayOfWeek = +prompt('Enter number 1-7');

switch (dayOfWeek) {
    case 1:
        console.log('Monday');
        break
    case 2:
        console.log('Tuesday');
        break
    case 3:
        console.log('Wednesday');
        break
    case 4:
        console.log('Thursday');
        break
    case 5:
        console.log('Friday');
        break
    case 6:
        console.log('Saturday');
        break
    case 7:
        console.log('Sunday');
        break
    default:
        console.log('Error');
}
//////////////////////////////////////////////////////////////////////////////////

//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

const num1 = +prompt('Enter number 1');
const num2 = +prompt('Enter number 2');

if (num1 > num2){
    console.log('Перше більше', num1);
}else if (num2 > num1){
    console.log('Друге більше', num2);
}else if (num1 === num2){
    console.log('Числа рівні', num1,num2);
}else{
    console.log('Error');
}

//////////////////////////////////////////////////////////////////////////////////

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false);

let xxx = '';

if (xxx === '' || xxx === null || xxx === undefined || xxx === 0){
    xxx = 'default';
}
console.log(xxx);

//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('Super');
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('Super');
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('Super');
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('Super');
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('Super');
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('Super');
}


