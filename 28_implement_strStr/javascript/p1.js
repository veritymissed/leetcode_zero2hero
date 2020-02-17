/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  var targetLocation = -1
  var difference = haystack.length - needle.length
  var shortLength = needle.length
  if (difference === 0 && haystack === needle) targetLocation = 0
  else {
    for (var i = 0; i <= difference; i++) {
      var sub = haystack.substr(i, shortLength)
      if (sub === needle) {
        targetLocation = i
        break
      }
    }
  }
  // console.log("targetLocation", targetLocation);
  return targetLocation
}

// strStr("hello", "ll");
// strStr("aaaaa", "bba");
// strStr("", "");
strStr('mississippi', 'pi')
