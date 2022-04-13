/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
        let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let arr=sentence.split(' ');
		let result=[]
  for(let i=0;i<arr.length;i++){
  if(vowels.includes(arr[i][0])){
    let withVowel=arr[i]+"ma"+"a".repeat(i+1)
    result.push(withVowel)
  }else{
    let noVowel=arr[i].slice(1)+arr[i][0]+"ma"+"a".repeat(i+1)
    result.push(noVowel)
  }
}
  return result.join(' ')
};