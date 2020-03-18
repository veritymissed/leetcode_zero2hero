/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */

var uncommonFromSentences = function (A, B) {
  var arrayA = A.split(' ')
  var arrayB = B.split(' ')

  var obj = {}

  arrayA.forEach((item, i) => {
    if (obj.hasOwnProperty(item)) obj[item] += 1
    else obj[item] = 0
  })
  arrayB.forEach((item, i) => {
    if (obj.hasOwnProperty(item)) obj[item] += 1
    else obj[item] = 0
  })

  var result = []
  for (var word in obj) {
    if (obj.hasOwnProperty(word)) {
      if (obj[word] === 0) result.push(word)
    }
  }

  return result
}

// const inputA = 'this apple is sweet'
// const inputB = 'this apple is sour'
const inputA = 'apple apple'
const inputB = 'banana'

uncommonFromSentences(inputA, inputB)
