/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    for (let i = 0; i < grid.length; i++) {
        grid[i].sort((a, b) => a - b); 
    }
    let sum = 0;
    while(grid[0].length>0){
      let maxValues = []; 
      for(let i=0;i<grid.length;i++){
        maxValues.push(grid[i].pop())
      }
    sum+= Math.max(...maxValues)
  }
return sum
};