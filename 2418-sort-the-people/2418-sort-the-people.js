/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {

    
    const infos=names.map((name,index)=>{
        const info={name:name,heights:heights[index]}
        return info
    })
    
    const result=infos.sort((a,b)=>b.heights-a.heights).map(item=>item.name)
return result    
    

};