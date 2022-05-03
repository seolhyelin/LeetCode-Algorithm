/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
        while(stones.length > 1) {
        stones = stones.sort((a, b) => b-a);
        if(stones[0] == stones[1]) {
            stones.shift();
        } else
            stones[1] = stones[0]-stones[1];
        stones.shift();
            
    }
    
    return stones.length > 0?stones[0]:0;
};