// 1) date
// 2) try catch
// 3) optional chain operator
// 4) ES6 objects
// 5) Spread
// 6) shallow and deep copy JSON
////////////////////////////////////////////////////////
// 1) date

// let date = new Date();
// console.log(date);
//
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTime());
// console.log(new Date(232423423423));
// console.log(new Date('March 21 1563 04:20:07'));
// console.log(new Date(1978,0,12,30,45,34,9));
//
// console.log(1000*60*60*24*365); // перетворення 1000 мілісекунд

////////////////////////////////////////////////////////
// 2) try/catch

// console.log('start');
//
// try{
//     console.log(a);
// }catch (xxx) {
//     console.log(xxx);
// }
//
// console.log('end');


//console.log(123/0);


// function divider(a,b) {
//     let result;
//     if (b === 0){
//         console.log('Arithmetic exception');
//     } else{
//         result = a/b;
//     }
//     console.log(result);
// }
// divider(10,0);

///////////////////

// function divider(a,b) {
//     let result;
//     try{
//         result = a/b;
//     }catch (e) {
//         console.log(e);
//     }
//     console.log(result);
// }
// divider(10,0);

///////////////////

// function divider(a,b) {
//     if (b === 0){
//         throw new Error('Arithmetic exception');
//     }else {
//         console.log(a/b);
//     }
// }
//
// try{
//     divider(10,0);
// }catch (e) {
//     console.log('you cannot use 0 as divider!');
// }
////////////////////////////////////////////////////////
// 3) optional chain operator

// let user = {};
//
// console.log(user.wife);
// console.log(user?.wife?.name);

////////////////////////////////////////////////////////
// 4) ES6 objects

// let user = {
//     name: 'kokos',
//     age: 123,
//     //foobar(){},
//     wife: {
//
//     }
// }
//
// let user2 = user;
//
// let stringify = JSON.stringify(user);
// console.log(stringify);
//
// let parse = JSON.parse(stringify);
// console.log(parse);
//
// console.log(parse === user);
// console.log(parse.wife === user.wife); // +++++++

//////////

// object це поверхнева копія ( не користуватися ним )
// let assign = Object.assign({}, user);
// console.log(assign);
//
// console.log(assign === user);
// console.log(assign.wife === user.wife); // -------
//
// //////////
//
// // structuredClone (не передає поведінку (функції), буде валити помилку), обгортати в try/catch щоб не було помилок
// let clone = structuredClone(user);
// console.log(clone);
//
// console.log(clone === user);
// console.log(clone.wife === user.wife);

////////////////////////////////////////////////////////

// let user = {
//     name: 'kokos',
//     age: 123,
//     foobar(){},
//     wife: {}
// };

// let name = user.name;
// let age = user.age;
// let foobar = user.foobar;
// let wife = user.wife;


// let {name,age,foobar,wife} = user;
// console.log(name);
// console.log(age);
// console.log(foobar);
// console.log(wife);
//
//
// let user2 = {
//     name: 'abricos',
//     age: 123,
//     foobar(){},
//     wife: {}
// };
//
// let {name: user2Name, age: user2Age,foobar: user2Foobar,wife: user2Wife} = user2;
// console.log(user2Name);
// console.log(user2Age);
// console.log(user2Foobar);
// console.log(user2Wife);

///////////////////

// let user = {
//     name: 'kokos',
//     age: 123,
//     foobar(){},
//     wife: {
//         name: 'Anna',
//         surname: 'Popolinovich'
//     }
// };
//
// let {name,age,foobar,wife,wife:{name: wifeName}} = user;


// function adadad(obj) {
//     // let {name, age} = obj;
//     let name = obj.name;
//     let age = obj.age;
// }
//
// function popopop({name,age}) {
//
//
// }
//
// popopop({name: 'sgg', age: 123, xxx: 'gdfgfdg', yyy:'reengerngu'});
// popopop({name: 'sgg', age: 123, feefeg: 'gdfgfdg', yrtrbyy:'reengerngu'});
// popopop({name: 'sgg', age: 123, xegergregxx: 'gdfgfdg', ybtrbryy:'reengerngu', wibrcweucrb: 'wecrwrwrc'});

////////////////////////////////////////////////////////
// деструктуризація масивів

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
// let [a,b,c, ,m] = users;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(m);
//

// let user = {
//     name: 'asd',
//     skills: [{title: 'java', exp: 10}, {title: 'js', exp: 12}]
// }
//
// let {name, skills} = user;
//
// console.log(name);
// console.log(skills);
////////////////////////////////////////////////////////
// 5) Spread

// let user = {
//     name: 'Vasya',
//     age: 31,
//     skills: ['js','java']
// }
// let copy = {...user, skills: [...user.skills]};
// console.log(copy);
// console.log(copy === user);
// console.log(copy.skills === user.skills);