/**
 * @param {string[]} words
 * @return {number}
 */

    var similarPairs = function (words) {
  let arr = [];

  for (let i = 0; i < words.length; i++) {
    let keySet = new Set(words[i]);
    let keyString=[...keySet].sort().join("")
    arr.push(keyString)
  }

let count=0;
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] === arr[j]) count++;
    }
}

return count
};
