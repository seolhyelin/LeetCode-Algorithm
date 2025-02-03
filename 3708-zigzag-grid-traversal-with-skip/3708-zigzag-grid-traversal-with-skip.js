/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var zigzagTraversal = function(grid) {
    let result=[]
    
    for(let i=0;i<grid.length;i++){
      if(i % 2 === 0) {
        for(let j=0;j<grid[i].length;j+=2){
        result.push(grid[i][j])
        }
      }else {
        // 배열 길이가 짝수면 맨끝부터, 홀수면 그 앞부터
        let index=grid[i].length % 2 === 0 ? grid[i].length-1 : grid[i].length -2
        for(let j=index;j>=0;j-=2){
        result.push(grid[i][j])
        }
      }
    }
    return result
};