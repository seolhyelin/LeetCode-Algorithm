/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
  let obj={}
  
    for(let i=lowLimit; i<=highLimit; i++){
      if(0<i && i<10){
        obj[i] = obj[i] ? obj[i]+1 : obj[i] = i
      }else if(i>9){
        let sum = i.toString().split("").reduce((a,b)=> a+Number(b),0)
        obj[i] = obj[i] ? obj[i]+1 : obj[i] = sum
      }
    }
    const valuesArr=Object.values(obj).sort()
    const count = {}
    for(let i of valuesArr){
      count[i] = (count[i] || 0) + 1
    }
    return Math.max(...Object.values(count))
};