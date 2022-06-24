/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
     let arr=[]
 
 for(let i=0; i<command.length;){
   if(command[i]==='G'){
     arr.push('G')
     i ++
   }else if(command[i+1] === ')'){
     arr.push('o')
     i +=2
   }else{
     arr.push('al')
     i +=4
   }
 }
  
  return arr.join('')
};