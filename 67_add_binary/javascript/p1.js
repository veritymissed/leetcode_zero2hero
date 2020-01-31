/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  var longStr
  var shortStr
  if (a.length < b.length) {
    longStr = b
    shortStr = a
  } else {
    longStr = a
    shortStr = b
  }

  var difference = longStr.length - shortStr.length

  for (var i = 0; i < difference; i++) {
    shortStr = '0' + shortStr
  }

  var newStr = ''
  var upper = 0
  for (i = longStr.length - 1; i >= 0; i--) {
    // console.log("longStr[" + i + "]: " + longStr[i])
    // console.log("shortStr[" + i +"]: " + shortStr[i])
    var total = upper + parseInt(longStr[i]) + parseInt(shortStr[i])
    if (total === 3) {
      upper = 1
      newStr = '1' + newStr
    } else if (total === 2) {
      upper = 1
      newStr = '0' + newStr
    } else {
      console.log('total', total)
      upper = 0
      newStr = total + newStr
    }
  }
  if (upper === 1) {
    newStr = '1' + newStr
  }

  return newStr
}
