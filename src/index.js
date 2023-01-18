module.exports = function check(str, bracketsConfig) {
  // your solution
  let rezultArray = []
  let matches = {}
  let openBrackets = []
  let equalBrackets = []

  
  for (bracketPair of bracketsConfig) {
    openBrackets.push(bracketPair[0])
    bracketPair[0] === bracketPair[1] ? equalBrackets.push(bracketPair[0]) :  //openBrackets.push(bracketPair[0])
    matches[bracketPair[0]] = bracketPair[1] 
  }
  
  for(char of str) {
    if (openBrackets.indexOf(char) === -1) {
      let popedElement = rezultArray.pop()
      if(char != matches[popedElement]){
        return false
      }
    }else{
      if (equalBrackets.indexOf(char) != -1) {
        let popedElement = rezultArray.pop()
        if (popedElement != char) {
          rezultArray.push(popedElement)
          rezultArray.push(char)
        }
      } else {
        rezultArray.push(char)
      }
      
    }
  }

  return rezultArray.length === 0
}

/* const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

const str1 = '111115611111111222288888822225577877778775555666677777777776622222'
const str3 = '[(])'



function check(str, bracketsConfig) {

  let rezultArray = []
  let matches = {}
  let openBrackets = []
  let equalBrackets = []

  
  for (bracketPair of bracketsConfig) {
    openBrackets.push(bracketPair[0])
    bracketPair[0] === bracketPair[1] ? equalBrackets.push(bracketPair[0]) :  //openBrackets.push(bracketPair[0])
    matches[bracketPair[0]] = bracketPair[1] 
  }
  console.log(openBrackets)
  console.log(equalBrackets)
  console.log(str)

  for(char of str) {
    if (openBrackets.indexOf(char) === -1) {
      let popedElement = rezultArray.pop()
      if(char != matches[popedElement]){
        console.log(rezultArray, popedElement, char)
        return false
      }
    }else{
      if (equalBrackets.indexOf(char) != -1) {
        let popedElement = rezultArray.pop()
        if (popedElement != char) {
          rezultArray.push(popedElement)
          rezultArray.push(char)
        }
      } else {
        rezultArray.push(char)
      }
      
    }
  }
  // your solution
  console.log(matches, openBrackets, rezultArray)
} 

check(str1, config6) */