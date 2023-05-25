// arrow functions
//
// let foo = function (text){
//     console.log(text);
//     console.log(arguments);
// };
//
// foo('okten');

//////////////////////////////////////////////////////////////////////////////

//---1

// let calc = function (a,b){
//     let result = a + b;
//     return result;
// };

//---2
// this -> window
// no arguments

// let calc = (a,b) =>{
//     let result = a + b;
//     return result;
// };

//---3

// let calc = (a,b) => a + b;
// console.log(calc(10, 20));


//////////////////////////////////////////////////////////////////////////////

// let user = {
//     name: 'kokos',
//     age : 123,
//     greeting :  () => {
//         //this -> window
//         console.log(this.name);
//     }
// }
// user.greeting();

//////////////////////////////////////////////////////////////////////////////

// callback

// function asd(){
//
// }
//
// let xxx = asd;
//
// asd();
// xxx();

//////////////////////////////////

// function calc(num1,num2, fn) {
// }
//
// function fn(){};
// calc(10,20,fn);

//////////////////////////////////

// function calc(num1,num2,fn) {
//     fn(num1,num2);
// }
//
// calc(10,20, (a,b)=>{console.log(a+b)});
//
// calc(10,20,function (arg1,arg2){
//     console.log(arg1 + arg2);
// });
//
// calc(200,100,function (arg1,arg2) {
//     console.log(arg1 - arg2);
// });

//////////////////////////////////

//  let users = [
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
//
// let filter = users.filter(value => value.age > 30);
// console.log(filter);
//////////////////////////////////////////////////////////////////////////////
//recursion
// function foobarRec() {
//     console.log('hello');
//     foobarRec();
// }

let array = [
    11,
    22,
    33,
    true,
    [
        111,222,333,
        ['fsdf','fdsfdfsf','qweq']
    ]
];

function iterArray(arr) {
    for (const element of arr) {
        if(Array.isArray(element)){
            iterArray(element);
        }else {
            console.log(element);
        }
    }
}

iterArray(array);


