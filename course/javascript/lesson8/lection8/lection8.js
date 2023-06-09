//constructors
//call apply bind prototype
//proto
//class

////////////////////////////////////////////////////////////////////////
//PREVIEW INFO

// ~function constructors - не має return, бо нічого не повертає, а тільки будує об'єкт

// function User(name, age, status) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
// }
//
// let user1 = new User('asd', 123,true);
// let user2 = new User('qwe', 12,false);
//

// function User(name, age, status, wifeName, wifeAge) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = {name: wifeName, age: wifeAge};
//     this.greeting = function () {
//         console.log('hi');
//     }
// }

//let userWithObj = new User('ads',123,true,{name: 'Vera', age: 23});
///////abo
// let userWithObj = new User('add',123,true,'anna',28);
// console.log(userWithObj);
/////
//prototype call apply bind

// function User(name,age) {
//     this.name = name;
//     this.age = age;
// }
//
// let user = new User('vasya',31);
// user.greeting = function () {
//     console.log('hi');
// };
// console.log(user);
// user.greeting();
//
//
// let user2 = new User('petya', 32);
// console.log(user2);
// user.greeting();

//prototype
//first type of prototype

// console.log(User);
// User.prototype.greeting = function () {
//     return `hello my name is ${this.name}`;
// }
//
// let user2 = new User('petrovich', 228);
// console.log(user2);
// console.log(user2.greeting());

//second type of prototype

// let user = new User('vasya', 31);
// user.greeting = function (frst,scnd) {
//     return `${frst}, ${scnd} hello my name is ${this.name}`;
// };
// console.log(user.greeting('first','second'));
//
//
// let user2 = new User('petya', 123123);
// console.log(user.greeting.apply(user2,['first', 'second']));
//
//

//third type of prototype

// let user3 = new User('yaroslav',28);
// console.log(user.greeting.call(user3, 'hi','hiiiii'));

//forth type of prototype

// let user = new User('Vasya',31);
// user.greeting = function(msg) {return `${msg} my name is ${this.name}`};
// console.log(user.greeting('hehehe'));
//
// let user2 = new User('Petya',123);
// let greetingCopy = user.greeting.bind(user2);
// console.log(greetingCopy('dfgdfgdf'));

// class in js

// class User {
//
//     constructor(username, age) {
//         this.username = username;
//         this.age = age;
//     }
//
//
//     // static greeting(){
//     //     console.log(this);
//     //     console.log(this.age);
//     //     return `hello my name is ${this.name}`;
//     // }
//
//      work(){
//         return `work in process`;
//     }
//
//
//
// }

// greeting without "static"

// let user = new User('Vasya', 31);
// console.log(user);
// console.log(user.greeting());


//greeting with "static"

// console.log(User.greeting());
///////

// extends -> наслідування якогось класу
// class Customer extends User {
//
//     password
//
//
//     constructor(username, age, password) {
//         super(username, age);
//         this.password = password;
//     }
// }
//
// let customer = new Customer('Vasya', 23, 'password');
// console.log(customer);
// console.log(customer.work());

///////

// наслідування не в класах

// function User (name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// function Customer(name,age,password) {
//     //User.apply(this, [name,age]);
//     User.apply(this,arguments);
//     this.password = password;
// }
//
// let customer = new Customer('Vasya', 31, 'password');
// console.log(customer);

///////////
//proto

// console.log({});
// console.log({}.__proto__);

//     let user = {
//         id: 1,
//         name: 'kokos'
//     }
//
// let user2p = Object.create(user);
// console.log(user2p === user);
// console.log(user2p);
// console.log(user2p.id);
// console.log(user2p.name);
// console.log(user2p.hasOwnProperty('id'));
// console.log(user2p.hasOwnProperty('name'));
// user2p.surname = 'foobar';
// console.log(user2p.hasOwnProperty('surname'));
// console.log(user2p);
////////////////////////////////////////////////////////////////////////





