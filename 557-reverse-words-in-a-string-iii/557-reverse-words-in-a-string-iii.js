/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
      let arr=s.split(' ');
  let result=[];
for(let i=0; i<arr.length;i++){
  let newArr=arr[i].split('');

  result.push(newArr.reverse().join(''))
  
}
  return result.join(' ')
};
