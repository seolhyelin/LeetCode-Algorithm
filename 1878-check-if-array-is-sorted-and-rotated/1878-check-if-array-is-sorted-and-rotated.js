/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    const max=Math.max(...nums)
    const min=Math.min(...nums)
    const sortNums=[...nums].sort((a,b)=> a-b) // 원본배열은 유지
    let descCount = 0;
    if(JSON.stringify(nums) === JSON.stringify(sortNums)) return true // 이미 정렬되어있으면 true
    
    for(let i=0;i<nums.length-1;i++){
      if(nums[i] > nums[i+1]){
        descCount ++;
        if(descCount > 1) return false; // 내림차순이 두번이면 안됨
      } else if(nums[i] === max && nums[i+1] === min){
         for(let j=i+1; j<nums.length-1;j++){
           if(nums[j] > nums[j+1]) return false
         }
         return true
      }
    }

    if(nums[nums.length - 1] > nums[0]) descCount++;

    return descCount <= 1
};