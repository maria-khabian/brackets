module.exports = function check(str, bracketsConfig) {
  // your solution
  const bracketsConfigOBJ = {}
  Object.values(bracketsConfig).forEach((item, idx, arr) => bracketsConfigOBJ[item[0]] = item[1])
  const check = []
  for ( let i = 0 ; i < str.length ; i++ ) {
    if (Object.values(bracketsConfigOBJ).includes(str[i])) {
      let idx = Object.values(bracketsConfigOBJ).findIndex(item => item == str[i]);
      check.pop(Object.keys(bracketsConfigOBJ)[idx])
    } else if(Object.keys(bracketsConfigOBJ).includes(str[i])) {
      check.push(str[i])
    } 
}
  return check.length === 0 ? true : false
}
