/**
 * @param {string} S
 * @return {string[]}
 */

function generatePenArray (str) {
  return str.split('').map((char) => {
    const lowerCase = char.toLowerCase()
    const upperCase = char.toUpperCase()
    if (lowerCase !== upperCase) return [lowerCase, upperCase]
    else return [char]
  })
}

function generatePermutation (array) {
  return array.reduce((accu, curr) => {
    if (!accu) return curr
    else return appendTail(accu, curr)
  })
}

function appendTail (currStr, newTail) {
  var newArray = currStr.reduce((accu, ele1, index, array) => {
    var newStrSet = newTail.map((ele2) => {
      return ele1.concat(ele2)
    })
    return accu.concat(newStrSet)
  }, [])
  return newArray
}

var letterCasePermutation = function (S) {
  var listingAllPossibleItems = generatePenArray(S)
  return generatePermutation(listingAllPossibleItems)
}

var input
input = 'a1b2'
// input = "3z4"
// input = "a1b2"
// input = '12345'

console.log(letterCasePermutation(input))
