// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     const a = 100; const b = '100'; const c = true;
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль



const zmin1 = 'hello';
console.log(zmin1);

const zmin2 = 'owu';
console.log(zmin2);

const zmin3 = 'ua';
console.log(zmin3);

const zmin4 = 1;
console.log(zmin4);

const zmin5 = 10;
console.log(zmin5);

const zmin6 = -999;
console.log(zmin6);

const zmin7 = 123;
console.log(zmin7);

const zmin8 = 3.14;
console.log(zmin8);

const zmin9 = 2.7;
console.log(zmin9);

const zmin10 = 16;
console.log(zmin10);

const zmin11 = true;
console.log(zmin11);

const zmin12 = false;
console.log(zmin12);
////////////////////////////////////////////

const firstName = 'Illia';

const middleName = 'Sergijovich';

const lastName = 'Shulika';

const user = `My name is ${firstName}, my middle name is ${middleName} and my last name is ${lastName}`;
console.log(user);


////////////////////////////////////////

const a = 100;
console.log(typeof a);

const b = '100';
console.log(typeof b);

const c = true;
console.log(typeof c);
////////////////////////////////////////


const name = prompt('Enter your name:');
const surname = prompt('Enter your surname:');
const age = Number(prompt('Enter your age:'));

console.log(`${name} ${surname} ${age}`);




