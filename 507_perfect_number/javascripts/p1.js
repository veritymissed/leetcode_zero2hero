/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  if (num <= 0) return false
  let total = 0
  for (var i = 0; i < num; i++) {
    // console.log("i",i, "and num % i", num%i);
    if (num % i === 0) total += i
    if (total > num) return false
  }
  return total === num
}

let input
input = 28
// input = 0

console.log(checkPerfectNumber(input))
