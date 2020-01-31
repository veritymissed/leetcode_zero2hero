/**
 * @param {number} n
 * @return {number}
 */
var record = {}
var climbStairs = function (n) {
  if (n > 2) {
    var oneStep
    var twoStep
    if (record[n - 1] !== undefined) {
      oneStep = record[n - 1]
    } else {
      oneStep = climbStairs(n - 1)
      record[n - 1] = oneStep
    }

    if (record[n - 2] !== undefined) {
      twoStep = record[n - 2]
    } else {
      twoStep = climbStairs(n - 2)
      record[n - 2] = twoStep
    }

    return oneStep + twoStep
  } else {
    if (n === 1) return 1
    if (n === 2) return 2
  }
}
