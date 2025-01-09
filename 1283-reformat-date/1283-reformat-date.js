/**
 * @param {string} date
 * @return {string}
 */
var splitDay=function(str,suffix){
  const day= str.split(suffix)[0]
  return day.length === 1 ? "0"+day : day
}
var reformatDate = function(date) {
    const month=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let monthObj={}
    const dateArr=date.split(" ").reverse()

    for(let i=0;i<month.length;i++){
      monthObj[month[i]] = i+1
    }

let monthString=""
  let day = (() => {
    if (dateArr[2].includes("st")) {
      return splitDay(dateArr[2], "st");
    } else if (dateArr[2].includes("nd")) {
      return splitDay(dateArr[2], "nd");
    } else if (dateArr[2].includes("rd")) {
      return splitDay(dateArr[2], "rd");
    } else if (dateArr[2].includes("th")) {
      return splitDay(dateArr[2], "th"); 
    }
    return null;
  })();
  
    let result=""
for(let i in monthObj){
  if(dateArr[1] === i) monthString = monthObj[i]
}
  
  monthString = monthString.toString().length === 1 ? "0"+monthString : monthString
  result = dateArr[0]+"-"+monthString+"-"+day  
  return result
};