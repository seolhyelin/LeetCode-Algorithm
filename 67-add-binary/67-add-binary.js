/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
//    const numA=parseInt(a);
//    const numB=parseInt(b);
  
//   const twototenA=parseInt(numA,2);
//   const twototenB=parseInt(numB,2);

//   const sum=twototenA+twototenB;
  
//   const tentotwo=sum.toString(2);
    
//   return tentotwo;
    return  (BigInt('0b'+a) + BigInt('0b'+b)).toString(2);

};