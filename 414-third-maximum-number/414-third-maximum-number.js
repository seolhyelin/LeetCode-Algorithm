/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const numsSet = new Set(nums);
    nums = [...numsSet];
    nums.sort((a, b) => b - a);
    if(nums.length > 2) {
        return nums[2];
    }
    return nums[0];
};