/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let arr = []
    let square = sumOfSquares(n);
    while (!arr.includes(square)) {
        if (square === 1) return true;
        arr.push(square);
        square = sumOfSquares(square);
    }
    return false;
};

var sumOfSquares = function(num) {
    let sum = 0;
    num = num.toString();
    for (let x of num) {
        x = Number(x);
        sum += x*x;
    }
    return sum;
};

// var isHappy = function(n) {
//     const arr = []
//     while(n!==1){
//         n = n.toString().split('').reduce((a,b)=>a+b*b,0)
//         if(arr[n])
//             return false
//         arr[n] = true
// }
//     return true
// };