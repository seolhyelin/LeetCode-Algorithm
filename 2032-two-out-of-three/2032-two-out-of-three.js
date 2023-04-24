/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
  const arr=[...new Set(nums1),...new Set(nums2),...new Set(nums3)]
  const result=[]
  
  for(let i of arr){
if(
  (nums1.includes(i) && nums2.includes(i)) ||
  (nums2.includes(i) && nums3.includes(i)) ||
  (nums1.includes(i) && nums3.includes(i))
  ){
  result.push(i)
}
  }
  
return [...new Set(result)]
};