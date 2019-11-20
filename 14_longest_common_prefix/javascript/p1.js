/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var prefix_str = '';

  var index = 0;
  var oneStringIsEnd = false;
  while (!oneStringIsEnd) {
    var temp = '';
    var bingo = false;
    for (let i = 0; i < strs.length; i++) {
      if (index >= strs[i].length) {
        oneStringIsEnd = true
        bingo = false
        break
      }
      if (i == 0) {
        temp = strs[i][index];
        bingo = true;
      } else {
        if (strs[i][index] !== temp) {
          bingo = false;
        }
      }
    }
    console.log("bingo " + bingo)
    if (!bingo) {
      oneStringIsEnd = true
    } else {
      prefix_str = prefix_str + temp
    }
    index++
  }
  return prefix_str

};
