//functions

// document.write(`<div>`);
// document.write(`<h2>some text1</h2>`);
// document.write(`</div>`);
//
// document.write(`<div>`);
// document.write(`<h2>some text2</h2>`);
// document.write(`</div>`);
//
// document.write(`<div>`);
// document.write(`<h2>some text3</h2>`);
// document.write(`</div>`);
//
//
// function xxx(textContent, tag) {
//     document.write(`<div>`);
//     document.write(`<${tag}>  ${textContent}  </${tag}>`);
//     document.write(`</div>`);
// }
//
// xxx('blblblbbblblbba', 'h1');
// xxx('afaffafafaf');

///////////////////////////////////////////////////////////////
//
// function fooIter(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// fooIter(users);
///////////////////////////////////////////////////////////////

// function calc(a,b) {
//     let result = a + b;
//     return result;
// }
//
// console.log(calc(10, 20));

///////////////////////////////////////////////////////////////

// function calc(a,b,action) {
//     let result;
//     switch (action) {
//         case '+':
//             result = a+b;
//             break
//         case '-':
//             result = a-b;
//             break
//         default:
//             return 'error';
//     }
//     return result;
// }
//
// console.log(calc(10,20,'-'));

///////////////////////////////////////////////////////////////

//overload of functions


// function fooCalc() {
//     console.log(arguments);
// }
//
// fooCalc(10,20,30,'-');
// fooCalc(10,20,'+');

// function fooCalc(...args) {
//     console.log(args);
// }
//
// fooCalc(10,20,30,5,42,23,'gogogo');

// function addToArr(arr, ...elements) {
//     for (const item of elements) {
//         if (typeof item === 'number'){
//             //arr.push(item);
//             arr[arr.length] = item;
//
//         }
//     }
//     return arr;
// }
//
// console.log(addToArr([], 11, 22, 'individ', 33, 44, 56, 39,'string',true,'Gektor'));

///////////////////////////////////////////////////////////////

// let obj = {
//     name: 'vasya',
//     age: 13,
//     greeting(msg) {
//         console.log(`${msg} my name is ${this.name}`);
//     }
// }
//
// obj.greeting('hi');

///////////////////////////////////////////////////////////////

// function userBuilder(name, age) {
//     let user = {name: name, age: age}
//     return user;
// }
//
// let user1 = userBuilder('kokos',123);
// console.log(user1);
//
// let user2 = userBuilder('anton', 34);
// console.log(user2);
//
// user2.age = -999;
// console.log(user2);

function userBuilder(name,age) {
    let user = {name: name, age: age}

    let newVar = {
        getInfo: function () {
            return `name - ${user.name}, age - ${user.age}`
        },
        setAge: function (age) {
            if (age > user.age){
                user.age = age;
            }
        }
        
    }
    return newVar;
}

let manipulator = userBuilder('vasya', 31);
console.log(manipulator.getInfo());

manipulator.setAge(32);
console.log(manipulator.getInfo());

console.log(manipulator);