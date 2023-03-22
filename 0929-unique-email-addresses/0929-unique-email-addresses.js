/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let local=[]
  let domain=[]
  let result=[]
    for(let i in emails){
 local.push(emails[i].split('@')[0].replace(/\./g,'').split('+')[0])
      domain.push(emails[i].split('@')[1])
    }

  for(let i=0;i<emails.length;i++){
    result.push(local[i]+'@'+domain[i])
  }
  
const set=new Set(result)
return set.size
};