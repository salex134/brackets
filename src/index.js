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

  console.log(openBrackets)
  console.log(equalBrackets)

  for (char of str) {
    if (openBrackets.indexOf(char) === -1) {
      let popedElement = rezultArray.pop()
      //console.log(popedElement)
      if (char != matches[popedElement]) {
        return false
      }
    } else {
      if (equalBrackets.indexOf(char) != -1) {
        let popedElement = rezultArray.pop()
        //console.log(popedElement)
        if (popedElement === undefined) {
          rezultArray.push(char)
          console.log(`first pushed element: ${rezultArray}`)
          continue
        }
        if (popedElement != char && popedElement != undefined) {
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

