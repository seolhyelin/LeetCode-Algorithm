/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let sum=0;
  let max=0;
  for(let i=0; i<accounts.length;i++){
		for(let j=0; j<accounts[i].length; j++){
    sum += accounts[i][j];
  }
    if(sum>max){
      max=sum;
      sum=0;
  }else{
    sum=0;
  }
  }
  return max;
};