// function User(name,age) {
//     this.name = name;
//     this.age = age;
// }

// let user1 = new User('kokos', 123);
// console.log(user1);
//
// let user2 = new User('abricos', 111);
// console.log(user2);

// let simpleUsers = [
//     new User('asd',133),
//     new User('asd',133),
//     new User('asd',133),
//     new User('asd',133),
//     new User('asd',133),
//     new User('asd',133),
//     new User('asd',133)
// ];
// console.log(simpleUsers);

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
// function Customer(name,age,id) {
//     this.name = name;
//     this.age = age;
//     this.id = id;
// }
//
// let customers = users.map(value => new Customer(value.name,value.age,new Date().getTime()));
// console.log(customers);
//
//
// let array = new Array(10,1,2,3,4,5); // []
// let date = new Date();


function User(name,age, wifename, wifeage) {
    this.name = name;
    this.age = age;
    this.greeting = function (msg) {
        console.log(`${msg} my name is ${this.name}`)
    }
    this.wife = {
        wifename, wifeage
    };
}

let user = new User('Vasya', 31, 'Sofa', 25);
user.greeting('hello');

let friend = {
    name: 'kokos',
    skills: ['java','js']
};

user.greeting.call(friend);


