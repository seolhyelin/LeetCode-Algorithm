/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function(haystack, needle) {
   let kk=haystack.indexOf(needle);
    if(kk>=0){
      return kk;
    }else if(kk<0){
      return -1;
    }else if(haystack.length=0){
      return 0;
    }
};