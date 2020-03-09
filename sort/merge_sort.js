// const input = [15, 8, 20, 7, 66, 54, 18, 26]
const input = [15, 8, 20, 7, 66, 54, 18, 26, 24]

// const input1 = [2, 10, 12, 18, 25]
// const input2 = [6, 16, 20, 32, 34]

function mergSort (array) {
  console.log('array', array)
  var pairs = splitIntoPairs(array)
  while (pairs.length > 1) {
    const newPairs = []
    for (let i = 0; i < pairs.length; i = i + 2) {
      let mergedPair
      if (pairs[i + 1]) {
        mergedPair = mergeTwoSortedArraySort(pairs[i], pairs[i + 1])
      } else {
        mergedPair = pairs[i]
      }
      newPairs.push(mergedPair)
    }
    pairs = newPairs
  }
  console.log('After merge sorted:', pairs[0])
  return pairs[0]
}

mergSort(input)

function mergeTwoSortedArraySort (arr1, arr2) {
  let pointer1 = 0
  let pointer2 = 0

  let newArray = []

  while (pointer1 <= arr1.length || pointer2 <= arr2.length) {
    if (arr1[pointer1] === undefined) {
      newArray = newArray.concat(arr2.slice(pointer2, arr2.length))
      break
    }
    if (arr2[pointer2] === undefined) {
      newArray = newArray.concat(arr1.slice(pointer1, arr1.length))
      break
    }

    // console.log("Compare %j from arr1[%j] with %j from arr2[%j]", arr1[pointer1], pointer1, arr2[pointer2], pointer2);
    if (arr1[pointer1] < arr2[pointer2]) {
      newArray.push(arr1[pointer1])
      pointer1++
    } else {
      newArray.push(arr2[pointer2])
      pointer2++
    }
  }
  // console.log("newArray", newArray);
  return newArray
}

// mergeTwoSortedArraySort(input1, input2)

function splitIntoPairs (array) {
  var pairs = []
  for (var i = 0; i < array.length; i = i + 2) {
    let newPair
    if (array[i + 1]) {
      newPair = mergeTwoSortedArraySort([array[i]], [array[i + 1]])
    } else {
      newPair = [array[i]]
    }
    pairs.push(newPair)
  }
  // console.log("pairs", pairs);
  return pairs
}
// splitIntoPairs(input)
