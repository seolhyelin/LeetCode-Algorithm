/**
 * @param {number[][]} grid
 * @return {number[]}
 */

var missingNumber = function(arr,total){
    const max=Math.max(...arr)
    let expectedSum =0
    for(let i=1;i<=total;i++){
        expectedSum +=i
    }

    let actualSum=0
    for(let i of arr){
        actualSum += i
    }

    return expectedSum - actualSum
}
var findMissingAndRepeatedValues = function(grid) {
    const arr=grid.flat()
    const totalCount = grid.length * grid.length; 
    let obj={}
    let result=[]

    for(let i=0;i<arr.length;i++){
        obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1
         if (obj[arr[i]] === 2) {
            result[0] = arr[i]
        }
    }

    const set = [...new Set(arr)].map((v) => Number(v));


    result[1] = missingNumber(set,totalCount)

    return result
};