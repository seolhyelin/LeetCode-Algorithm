/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
        let pow=nums.map((num)=> Math.pow(num,2))
    let sortArr=pow.sort((a,b)=>a-b)
    return sortArr
};