module.exports = function check(str, bracketsConfig) {
  // your solution
  const bracketsConfigOBJ = {}
  
  Object.values(bracketsConfig).forEach((item, idx, arr) => bracketsConfigOBJ[item[0]] = item[1])
  const arrKeys = Object.keys(bracketsConfigOBJ)
  const arrValues = Object.values(bracketsConfigOBJ)
  const check = []
  
  for ( let i = 0 ; i < str.length ; i++ ) {
    
    let currentValue = str[i]
    
    if (arrKeys.includes(currentValue) && !(check.includes(currentValue) && bracketsConfigOBJ[currentValue] === currentValue)) {
      
      check.push(currentValue) 
      
    } else {
      if (arrValues.includes(currentValue)) {
    
        let idx = arrValues.findIndex(item => item === currentValue);
        
          if(check[check.length-1] === arrKeys[idx]) {
            check.pop()
          } else {
            return false
          }
      }   
    }
     
}
  return check.length === 0 
}
