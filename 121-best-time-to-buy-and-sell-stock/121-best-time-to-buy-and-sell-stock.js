/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let first = prices[0]
    let maxProfit = 0
    
    for (let i=0; i < prices.length; i++){
        if(prices[i] < first){
            first = prices[i]
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - first)
        }
    }
    
    return maxProfit
};
