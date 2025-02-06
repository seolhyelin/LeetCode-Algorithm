/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
        let obj1={} , obj2={}, result=[]

    for(let i in nums1){
      obj1[nums1[i]] = obj1[nums1[i]] ? obj1[nums1[i]] += 1 : 1
    }
    for(let i in nums2){
      obj2[nums2[i]] = obj2[nums2[i]] ? obj2[nums2[i]] += 1 : 1
    }

  Object.keys(obj1).forEach(key=>{
    if(key in obj2){
      let count = Math.min(obj1[key], obj2[key])
      for(let i=0; i<count;i++){
        result.push(Number(key))
      }
    }
  })
return result
};