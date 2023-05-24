
//swap
function xxx(array, ind1, ind2) {
    let x = array[ind1];
    array[ind1] = array[ind2];
    array[ind2] = x;
    return array;
}

let result = xxx([11,22,33,44,55], 2,4);
console.log(result);