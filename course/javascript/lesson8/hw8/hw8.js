// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)


// function User(id,name,surname,email,phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [
//     new User(10,'Vasya','Pupkin','fdsdfsdf@gmail.com',3809990932323),
//     new User(9,'Vasya','Pupkin','fdsdfsdf@gmail.com',3809990932323),
//     new User(8,'Vasya','Pupkin','fdsdfsdf@gmail.com',3809990932323),
//     new User(7,'Vasya','Pupkin','fdsdfsdf@gmail.com',3809990932323),
//     new User(6,'Vasya','Pupkin','fdsdfsdf@gmail.com',3809990932323),
//     new User(5,'Vasya','Pupkin','fdsdfsdf@gmail.com',3809990932323),
//     new User(4,'Vasya','Pupkin','fdsdfsdf@gmail.com',3809990932323),
//     new User(3,'Vasya','Pupkin','fdsdfsdf@gmail.com',3809990932323),
//     new User(2,'Vasya','Pupkin','fdsdfsdf@gmail.com',3809990932323),
//     new User(1,'Vasya','Pupkin','fdsdfsdf@gmail.com',3809990932323)
// ];


//////////////////////////////////////////////////////////////////////////////////////////////
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filterUsers = users.filter((user) => !(user.id % 2));
// console.log(filterUsers);

//////////////////////////////////////////////////////////////////////////////////////////////
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort = users.sort((a,b) => a.id - b.id);
// console.log(sort);

////////////////////////////////////////////////////////////////////////////////////////////////
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//
//     constructor(id,name,surname,email,phone,order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
//
// }
//
// let clients = [
//     new Client('1','Vasya','Pupkin','pupok@gmail.com','3806878567',['tovar1', 'tovar2','tovar3','tovar4']),
//     new Client('2','Petya','Petkin','pupok@gmail.com','380634878567',['tovar1', 'tovar2','tovar3']),
//     new Client('3','Jora','Jorkin','pupok@gmail.com','380687867567',['tovar1', 'tovar2','tovar3']),
//     new Client('4','Dima','Dimkin','pupok@gmail.com','380687893567',['tovar1', 'tovar2','tovar3']),
//     new Client('5','Sergey','Sergesha','pupok@gmail.com','380026878567',['tovar1', 'tovar2','tovar3']),
//     new Client('6','Illia','Pustov','pupok@gmail.com','380687298567',['tovar1', 'tovar2']),
//     new Client('7','Bogdan','Pupkin','pupok@gmail.com','380687833567',['tovar1', 'tovar3']),
//     new Client('8','Eduard','Pupkin','pupok@gmail.com','380687398567',['tovar1', 'tovar2','tovar3']),
//     new Client('9','Vitaliy','Pupkin','pupok@gmail.com','380687812567',['tovar1']),
//     new Client('10','Stepan','Pupkin','pupok@gmail.com','380687278567',['tovar1', 'tovar2','tovar3'])
// ];


////////////////////////////////////////////////////////////////////////////////////////////////
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sort = clients.sort((client1,client2) => client1.order.length - client2.order.length);
// console.log(sort);


//////////////////////////////////////////////////////////////////////////////////////////////////
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model,producer,year,maxSpeed,volume) {
//             this.model = model;
//             this.producer = producer;
//             this.year = year;
//             this.maxSpeed = maxSpeed;
//             this.volume = volume;
//             this.drivers = [];
//
//             this.drive = function () {
//                 console.log((`їдемо зі швидкістю ${this.maxSpeed} на годину`));
//             };
//
//             this.info = function () {
//                 console.log(`model: ${this.model}`)
//                 console.log(`producer: ${this.producer}`)
//                 console.log(`year: ${this.year}`)
//                 console.log(`maxSpeed: ${this.maxSpeed}`)
//                 console.log(`volume: ${this.volume}`)
//                 console.log(`drivers: ${JSON.stringify(this.drivers)}`);
//             };
//
//             this.increaseMaxSpeed = function (newSpeed) {
//                 newSpeed = this.maxSpeed + newSpeed;
//                     this.maxSpeed =     newSpeed < 0 ? 0:newSpeed;
//             };
//
//             this.changeYear = function (newValue) {
//                 this.year = newValue;
//             }
//
//             this.addDriver = function (driver) {
//                 this.drivers.push(driver);
//             }
// }
//
// let car1 = new Car('Toyota','Japan',2013,250,'5.2');
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(25);
// car1.changeYear(2020);
// console.log('*******************');
// car1.info();
// console.log('*******************');
// car1.addDriver({name:'Vasya',age:23});
// car1.info();


////////////////////////////////////////////////////////////////////////////////////////////////////
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//

// class Car {
//          constructor(model,producer,year,maxSpeed,volume) {
//              this.model = model;
//             this.producer = producer;
//             this.year = year;
//             this.maxSpeed = maxSpeed;
//             this.volume = volume;
//             this.drivers = [];
//          }
//
//          drive (){
//              console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//          };
//
//         info(){
//                 console.log(`model: ${this.model}`)
//                 console.log(`producer: ${this.producer}`)
//                 console.log(`year: ${this.year}`)
//                 console.log(`maxSpeed: ${this.maxSpeed}`)
//                 console.log(`volume: ${this.volume}`)
//                 console.log(`drivers: ${JSON.stringify(this.drivers)}`);
//         };
//
//         increaseMaxSpeed (newSpeed){
//             newSpeed = this.maxSpeed + newSpeed;
//             this.maxSpeed = 0 ? 0 : newSpeed;
//         };
//
//         changeYear (newValue){
//             this.year = newValue;
//         };
//
//         addDriver (driver){
//             this.drivers.push(driver);
//         }
//
// }
//
//
// let car = new Car('Crusac','Toyota',2012,280,6.2);
// car.drive();
// car.info();
// car.increaseMaxSpeed(20);
// car.info();
// car.changeYear(2015);
// car.info();
// car.addDriver({name:'Petya',age:31});
// car.info();


//////////////////////////////////////////////////////////////////////////////////////////////////////
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


// class Cinderella {
//     constructor(name,age,footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let people = [
//     new Cinderella('Olga',23,39),
//     new Cinderella('Vika',21,42),
//     new Cinderella('Sasha',19,45),
//     new Cinderella('Anna',24,38),
//     new Cinderella('Sveta',28,41),
//     new Cinderella('Veronika',31,37),
//     new Cinderella('Nadya',17,44),
//     new Cinderella('Lena',22,46),
//     new Cinderella('Miroslava',15,36),
//     new Cinderella('Sofia',18,34)
// ];

// class Prince {
//     constructor(name,age,boot) {
//         this.name = name;
//         this.age = age;
//         this.boot = boot;
//     }

    // findPrincess1(arr){
    //     arr = arr.sort((a,b)=>a.age-b.age);
    //     for (const princess of arr) {
    //         if (princess.footSize === this.boot){
    //             return princess;
    //         }
    //     }
    // }
//     findPrincess2(arr){
//         return  arr.find((princess)=> princess.footSize === this.boot);
//     }
//
//}

//let prince = new Prince('Sergey',18,37);
//console.log(prince.findPrincess1(people));
//console.log(prince.findPrincess2(people));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////