// STRING functions


// let s1 = 'hello'; // примітивний тип
// let s2 = new String('hello2');// являється об'єктом
// console.log(s1);
// console.log(s2);
//
// let url = 'http://github.com/Qbickkk';
// console.log(url[0]);
//
// let s = url.concat('?');
// console.log(s);
//
// let up = url.toUpperCase();
// console.log(up);
//
// let low = url.toLowerCase();
// console.log(low);
//
// let b = url.startsWith('https');
// console.log(b);
//
// let c = url.endsWith('k');
// console.log(c);
//
// let sub = url.substring(18, 23);
// console.log(sub);
//
// let ind = url.indexOf('g');
// console.log(ind);
// let m = url.substring(ind,ind+10);
// console.log(m);

// let data = 'vasya-31;petya-28;gosha-32';
// let split = data.split(';');
// console.log(split);

// let char = url.charAt(8);
// console.log(char);

//console.log(url.indexOf('o', 9));

// console.log(url.lastIndexOf('g'));

// console.log(url.replaceAll('k', '1'));

// let phoneNumb = '+38 (067) 338-12-12';
// let replace = phoneNumb
//     .replaceAll('+38','')
//     .replaceAll('-','')
//     .replaceAll('(', '')
//     .replaceAll(')', '')
//     .replaceAll(' ', '');
// console.log(replace);

//////////////////////////////////////////////////////////////////////////////////////
// ARRAYS functions

// let arr = [11,22];
// let push = arr.push(33);   // додавання у кінець
// console.log(arr, push);
//
// let unshift = arr.unshift(0); //додавання у початок
// console.log(arr, unshift);
//
// let pop = arr.pop(); // видалення в кінці та повернення змінної
// console.log(pop);
// console.log(arr);
//
// let shift = arr.shift(); // видалення на початку та повернення змінної
// console.log(arr, shift);

// let arr = [111,222,333,444];
// let splice = arr.splice(1,2, 'asd', 'qwe', 'zxc'); //видалення та заміна елементів
// console.log(arr, splice);
//
// let reverse = arr.reverse();
// console.log(reverse);

// [ 111, 'asd', 'qwe', 'zxc', 444 ]
// [ 444, 'zxc', 'qwe', 'asd', 111 ]
// console.log(arr.indexOf('asd')); // виходить 3, бо ми ще реверс зробили
//
// let slice = arr.slice(1,3); // вирізає з по та повертає
// console.log(slice);
// console.log(arr);
//
// console.log(arr.includes(444)); // чи є такий елемент, повертає бульку

//////////////////////////////////////////////////////////////////////////////////////
//callback

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// users.forEach(function (user) {
//     console.log(user);
// });

// users.forEach(user => {
//     if (user.age > 30){
//         user.isLoveOlive = true;
//     }
// });
// console.log(users);

// function foreach(arr, callback) {
//     for (const arrElement of arr) {
//         callback(arrElement);
//     }
// }
//
// foreach(users, user => console.log(user));

// users.forEach(user => console.log(user));


// let filter = users.filter(value => value.age > 30);

// abo

// let filter = users.filter(value => {
//     return value.age > 30
// });
//
// console.log(filter);

// let map = users.map(value => {
//     let newUser = value;
//     if (value.age > 30){
//         newUser.isLoveOlive = true;
//     }
//     return newUser;
// });
// console.log(map);

// let map = users.map(user => {
//     return {...user};
// });
//
// console.log(map);
// console.log(users);
// console.log(map === users);
// console.log(map[0] === users[0]);

//let map1 = users.map(value => ({name: value.name, age: value.age, status: value.status}));
//abo te same
// let map1 = users.map(value => ({...value}));
// console.log(map1);

// let sort = users.sort((a,b)=>{
//     return a.age - b.age;
//   //return b.age - a.age;
// });

// let sort = users.sort((a,b) =>{
//     if (a.name > b.name){
//         return 1;
//     }
//     if (a.name < b.name){
//         return -1;
//     }
//     if (a.name === b.name){
//         return 0;
//     }
// })

//abo te same

// let sort = users.sort((a,b) =>a.name.localeCompare(b.name));
// console.log(sort);

//reduce
// [.......] -> [ 1[], 2[] ] abo { 1[], 2[] }

let reduce = users.reduce((accumulator, user) => {
    if (user.status){
        accumulator.tStatus.push(user);
    }else{
        accumulator.fStatus.push(user);
    }
    return accumulator;
}, {tStatus:[], fStatus:[]});
console.log(reduce);
