//Масиви, об'єкти, вбудовані об'єкти, if, switch

//  let arr = [123,234,345,5, 'sdfsdfsdf'];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[4]);
//
//
// let matrix = [
//     123,
//     234,
//     345,
//     [11,22,33]
// ];
//
// let innerArray = matrix[3];
// console.log(innerArray[1]);
// //або
// console.log(matrix[3][1]);
//
// let user1Name = 'Vasya';
// let user1Age = 31;
// let user1Status = true;
//
// let user1 = {
//     name: 'Vasya',
//     age: 31,
//     status: true,
//     skills: ['java','js','mysql'],
//     brother:{
//         name: 'oleg',
//         age: 18,
//         status: false
//     }
// }
//
//
// console.log(user1);
// console.log(user1.name);
// console.log(user1['name']);
// console.log(user1.skills[2]);
// console.log(user1.brother['status']);
//
// user1.surname = 'Pupkin';
// console.log(user1);

// let users = [
//     {name: 'oleg', age: 13, status: false},
//     {name: 'vasya', age: 15, status: true},
//     {name: 'ann', age: 11, status: true},
// ];
// console.log(users);
// console.log(users[2]['age']);
//
// let anna = users[2];
// console.log(anna['age']);
//
// delete users[0].age;
// console.log(users);

//примітивні типи даних

// let pv1 = 100500;
// let pv2 = pv1;
// pv2 = 100600;
// console.log(pv1, pv2);
//
// let obj1 = {key1: 100500};
// let obj2 = obj1;
//
//
// console.log(obj1);
// console.log(obj2);
//
// obj2.key1 = 1;
//
// console.log(obj1);
// console.log(obj2);


// логічні розгалуження

// let age = +prompt('how old are you');
//
// console.log(age);
//
// if (age > 18 ){
//     document.write('<div>orange hub</div>');
// }else{
//     document.write('<div>cartoon hub</div>');
// }

//
// let answer = prompt('are you older 18?');
//
// if (answer === 'yes' || answer === 'так'){
//     document.write('<div>OrangeHub</div>')
// }else{
//     document.write('<div>CartoonHub</div>')
// }

// let color = 'greeeen';
//
// if (color === 'green'){
//     console.log('go');
// }else if(color === 'yellow'){
//     console.log('wait');
// }else if(color === 'red'){
//     console.log('stop');
// }else{
//     console.log('?????');
// }

let color = 'red';

switch (color){
    case 'green':
        console.log('go');
        break
    case 'yellow':
        console.log('wait');
        break
    case 'red':
        console.log('stop');
        break
    default:
        console.log('?????');
}

