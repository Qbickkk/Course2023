// //    date
//
// let date = new Date();
// console.log(date);
//
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTime());
// console.log(new Date(234234253252442));
// console.log(new Date('March 12 1992 11:34:50'));
// console.log(new Date(1987,0,21,12,30,45, 34));
//
//
// console.log(1000*60*60*24*365);


// console.log('start');
//
// try{
//     console.log(a);
// }catch (xxx) {
//     console.log(xxx);
// }
//
// console.log('end');

//console.log(103/0);

// function divider(a,b) {
//     let result;
//     if (b === 0 ){
//         console.log('Arithmetic exception');
//     }else{
//         let result = a/b;
//     }
//     console.log(result);
// }
//
// divider(10,0);

// function divider(a,b){
//     let result;
//    try{
//        result = a/b;
//    }catch (e){
//        console.log(e);
//    }
//     console.log(result);
// }
//
// divider(10,0);

//
// function divider(a,b) {
//     if (b === 0){
//         throw new Error('Arithmetic exception');
//     }else{
//         console.log(a/b);
//     }
// }
// try {
//     divider(10, 0);
// } catch (e) {
//     console.log('you cannot use 0 as divider!');
// }


// let user = {
//
// };
//
// console.log(user.wife);
// // console.log(user.wife.name);
// console.log(user?.wife?.name);



let user ={
  name: 'kokos',
  age: 123,
  foobar(){}
};
let user2 = user;



let s = JSON.stringify(user);
console.log(s);

let obj = JSON.parse(s);
console.log(obj);

let assign = Object.assign({},user);
console.log(assign);