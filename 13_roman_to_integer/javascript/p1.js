/**
 * @param {string} s
 * @return {number}
 */
// var input = 'III'
// var input = 'IV'
// var input = 'IX'
// var input = 'LVIII'
var input = 'MCMXCIV'

var mappingTable = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}
var romanToInt = function (s) {
  var array = Array.from(s).map((character) => {
    return mappingTable[character]
  })
  // console.log("array", array);
  var sum = 0
  for (var i = 0; i < array.length; i++) {
    if (i < array.length - 1 && array[i] < array[i + 1]) {
      // console.log("This should be %j - %j", array[i+1] , array[i]);
      sum = sum + array[i + 1] - array[i]
      i++
    } else {
      sum += array[i]
    }
  }
  return sum
}

console.log(romanToInt(input))
