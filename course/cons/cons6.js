/////// .map

//[{},{}] -> [0,1],
//[{},{}] -> ['0','1']

// let users = [
//     {id: 1, name: 'Vasya', age: 31, status: true},
//     {id: 2, name: 'Petya', age: 13, status: false}
// ];
//
// let map = users.map((value => value.name));
// console.log(map);
// console.log('****************');
//
// let map1 = users.map(value => ({id:value.id,name:value.name}));
// console.log(map1);
// console.log('****************');
//
// let usersWithAddrress = [
//     {id: 10, name: 'olya', age: 31, status: false, address: {city:'Lviv', number: 20}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city:'Lviv', number: 12}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city:'Lviv', number: 13}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city:'Lviv', number: 15}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city:'Lviv', number: 14}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city:'Lviv', number: 19}},
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city:'Lviv', number:11}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city:'Lviv', number: 21}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city:'Lviv', number: 17}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city:'Lviv', number: 16}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city:'Lviv', number: 18}}
// ];
//let sortedUsers = usersWithAddrress.sort((user1,user2) => user1.address.number - user2.address.number);
//console.log(sortedUsers);
//console.log('****************');
//let filteredSortedUsers = sortedUsers.filter((value) => value.age>30);
//console.log(filteredSortedUsers);
//console.log('****************');
// let sortedUsers = usersWithAddrress
//     .sort((user1,user2) => user1.address.number - user2.address.number)
//     .filter((value) => value.age>30)
//     .map(value => ({imya: value.name}));
// console.log(sortedUsers);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//let books = [];
// let sortBooks = books.sort((a,b) => a.genres.length - b.genres.length)
// let maxGenreSize = sortBooks[0].genres.length;
// sortBooks.filter(value => value.genres === maxGenreSize);


// books.sort((a,b) => a.genres.length - b.genres.length)
//         .reduce((accum, book) =>{
//             if (book.genres.length === 8){
//                 ++accum.count8;
//             }else if(book.genres.length === 7){
//                 ++accum.count7;
//             }
//             return accum;
//         }, {count8:,count7:,count6:,count5:}); //result of reduce {count8: 30, count7: 40}
//
//
