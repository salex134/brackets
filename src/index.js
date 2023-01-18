/* module.exports = function check(str, bracketsConfig) {
  // your solution
} */

const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

const str1 = '111115611111111222288888822225577877778775555666677777777776622222'



function check(str, bracketsConfig) {

  rezultArray = []
  let matches = {}
  openBrackets = []
  equalBrackets = []

  
  for (bracketPair of bracketsConfig) {
    bracketPair[0] === bracketPair[1] ? equalBrackets.push(bracketPair[0]) : openBrackets.push(bracketPair[0])
    matches[bracketPair[0]] = bracketPair[1] 
  }
  console.log(openBrackets)
  console.log(str)

  for(char of str) {
    if (openBrackets.indexOf(char) === -1) {
      popedElement = rezultArray.pop()
      if(char != matches[popedElement]){
        console.log(rezultArray, char)
        return false
      }
    }else{
      rezultArray.push(char)
    }
    /* console.log(char) */
  }
  // your solution
  console.log(matches, openBrackets)
} 

check(str1, config6)