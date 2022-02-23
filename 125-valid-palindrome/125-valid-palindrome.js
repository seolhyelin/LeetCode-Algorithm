/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const reg =/[^a-zA-Z0-9]/gi;
  	const regex = / /gi;
    
    let str=s.toLowerCase().replace(reg, ``).replace(regex,'');
  	let newStr=str.split('').reverse().join('');

    return str===newStr;
};