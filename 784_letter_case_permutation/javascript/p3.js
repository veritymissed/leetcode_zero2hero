var letterCasePermutation = function (S) {
  var newArray = S.split('').map((char) => {
    const upperCase = char.toUpperCase()
    const lowerCase = char.toLowerCase()
    if (upperCase === lowerCase) return [char]
    else return [upperCase, lowerCase]
  })

  return newArray.reduce((accu, curr) => {
    if (!accu) return curr
    else return appendTail(accu, curr)
  })
}

var appendTail = function (strings, tails) {
  const results = strings.reduce((accu, string) => {
    const afterAddedTail = tails.map((tail) => {
      const newStr = string.concat(tail)
      return newStr
    })
    return accu.concat(afterAddedTail)
  }, [])
  return results
}

var input
input = 'a1b2'
// input = "3z4"
// input = "a1b2"
// input = '12345'

letterCasePermutation(input)
