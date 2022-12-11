/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const arr=[]
    for(let i of s){
     if(!arr.includes(i)){
       arr.push(i)
     }else{
       return i
     }
      }

};