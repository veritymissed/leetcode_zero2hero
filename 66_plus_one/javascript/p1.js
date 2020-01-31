// var input = [1,2,3];
// var input = [4,3,2,1];

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  var output = []
  var upper = 1
  for (var i = digits.length - 1; i >= 0; i--) {
    var digit = digits[i]
    var total = upper + digit
    if (total > 9) {
      upper = 1
      total = 0
    } else {
      upper = 0
    }
    output.unshift(total)
  }
  if (upper !== 0) {
    output.unshift(1)
  }
  return output
}
