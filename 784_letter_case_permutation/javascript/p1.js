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
  // console.log("S:",S);

  // console.log('===============================================================');
  // console.log("appendTail", appendTail(['a','A'], ['1']));
  // console.log("appendTail", appendTail(['a1','A1'], ['b','B']));
  // console.log("appendTail", appendTail([ 'a1b', 'a1B', 'A1b', 'A1B' ], ['2']));
  // console.log('===============================================================');

  var listingAllPos = generatePenArray(S)
  // console.log('listingAllPos', listingAllPos);
  //
  // console.log(generatePermutation(listingAllPos))
  return generatePermutation(listingAllPos)
}

var input
// input = "a1b2"
// input = "3z4"
// input = "a1b2"
input = '12345'

letterCasePermutation(input)
