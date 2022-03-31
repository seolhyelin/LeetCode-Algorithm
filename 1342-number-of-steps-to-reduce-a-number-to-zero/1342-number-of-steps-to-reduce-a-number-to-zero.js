/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
 let count=0;
  
  	// for(let i=0;i<=num; i++){
  	// if(num%2==0){
  	// num=num/2;
  	// console.log(num)
  	// count++;
  	// }
  	// if(num%2==1){
  	// num=num-1;
  	// console.log(num)
  	// count++;
  	// }
  	// }
  
  while(num!==0){
     if(num%2==0){
        num=num/2;
        count++;
      }
      if(num%2==1){
        num=num-1;
        count++;
      }
  }
  return count;

};