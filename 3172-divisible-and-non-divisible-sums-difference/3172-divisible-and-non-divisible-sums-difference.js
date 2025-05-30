/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
 
const sum = n => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
};

const divisionNum = (n, m) => {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if(i%m === 0){
      sum +=i
    }
  }

  return sum;
};

var differenceOfSums = function (n, m) {
return sum(n)-divisionNum(n,m)-divisionNum(n,m)
};