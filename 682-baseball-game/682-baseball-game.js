/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
        let result=[]
    for(let i=0;i<ops.length;i++){
 	if(ops[i] === "C")
        {
            result.pop();
        }
        else if(ops[i] === "D")
        {
            result.push(Number(result[result.length-1]*2));
        }
        else if(ops[i] === "+")
        {
            result.push(Number(result[result.length-1]) + Number(result[result.length-2]))
        }
        else
        {
            result.push(Number(ops[i]));
        }
    }
    let sum = 0;
    for(let i=0; i<result.length; i++)
    {
        sum += result[i];
    }
    
    return sum;
};