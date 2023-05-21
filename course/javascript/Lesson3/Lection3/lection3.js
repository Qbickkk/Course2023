//цикли

//let x = 0;
// x = x +1 ;
//x = 0 + 1;

// x+=1;
// x++;
// x++;
// console.log(x);
// ++x;
// console.log(x);

//
// let x = 0;
// // let y = x++; // спочатку у приймає значення
// let y = ++x;   // спочатку х приймає значення
//console.log(x,y);

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

// let filterArr = [];
// for (let user of users){
//     if (user.age > 30 && user.status ){
//         filterArr[filterArr.length] = user
//     }
// }
// console.log(filterArr);

//debugger;
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     console.log(user);
// }


// let i = 0;
// while (i<users.length){
//     const user = users[i];
//     console.log(user);
//     i++;
// }

let m = {name: 'vasya', age: 31, status: false};

//console.log(Object.keys(m));


for(let key in m){
    console.log(key,m[key]);
}


for(const user of users){
    for (const userKey in user){
        console.log(userKey, user[userKey]);
    }
    console.log('************************');
}