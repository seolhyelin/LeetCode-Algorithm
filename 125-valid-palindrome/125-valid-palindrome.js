/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const reg = /[^\w\sㄱ-힣]|[\_]/g;
  	const regex = / /gi;
    
    let str=s.toLowerCase().replace(reg, ``).replace(regex,'');
  	let newStr=str.split('').reverse().join('');

    return str===newStr;
};