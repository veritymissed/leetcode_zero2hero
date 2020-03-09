// const input = [15, 8, 20, 7, 66, 54, 18, 26]
// const input = [15, 8, 20, 7, 66, 54, 18, 26, 24]
const input = [39, 11, 48, 5, 77, 18, 70, 25, 55, 33]

// const input = [2,1,5,10,8]
// const input = [2,1]
// const input = [10,8]
// const input = [5,4,3]
// const input = [5,4,3,2]
// const input = [2,4,3]

function quickSort (array) {
  console.log('============================')
  console.log('Input: ', array)
  console.log('============================\n')

  if (array.length === 2) {
    if (array[0] > array[1]) {
      const temp = array[0]
      array[0] = array[1]
      array[1] = temp
    }
    return array
  }
  if (array.length === 1) {
    return array
  }

  var split = false
  var Ki = array[0]
  var Kindex = 0
  var Kjndex = array.length

  while (!split) {
    for (var i = 1; i < array.length; i++) {
      if (array[i] >= Ki) {
        Kindex = i
        break
      }
    }

    for (var j = array.length - 1; j >= 1; j--) {
      if (array[j] <= Ki) {
        Kjndex = j
        break
      }
    }

    if (Kindex === 0) {
      console.log('Ki %j is the max, move to the right', Ki)
      var left = quickSort(array.slice(1, array.length))
      return left.concat([Ki])
    }
    if (Kjndex === array.length) {
      console.log("Ki %j is the min, don't move", Ki)
      var right = quickSort(array.slice(1, array.length))
      return [Ki].concat(right)
    }

    console.log('i = %j, j = %j', Kindex, Kjndex)

    if (Kindex < Kjndex) {
      console.log('Now the i < j , Swap Ki with Kj Swap %j with %j', array[Kindex], array[Kjndex])
      const temp = array[Kindex]
      array[Kindex] = array[Kjndex]
      array[Kjndex] = temp
    } else {
      split = true
      console.log('------------This is the last swap of this time recusive input------------')
      console.log('Now the j < i, Swap array[0] %j with array[%j] %j', Ki, Kjndex, array[Kjndex])
      console.log('-------------------------------------------------------------------------')
      const temp = array[0]
      array[0] = array[Kjndex]
      array[Kjndex] = temp
    }

    console.log('Array after swap', array)
  }
  console.log('Ki=%j, Kindex=%j,Kjndex=%j', Ki, Kindex, Kjndex)
  // console.log("array after swap", array);
  if (array.length < 4) {
    return array
  }

  var center = array[Kjndex]
  var leftUnsorted = array.slice(0, Kjndex)
  var rightUnsorted = array.slice(Kjndex + 1, array.length)
  console.log('leftUnsorted', leftUnsorted)
  console.log('center', center)
  console.log('rightUnsorted', rightUnsorted)

  var leftSorted = quickSort(array.slice(0, Kjndex))
  var rightSorted = quickSort(array.slice(Kjndex + 1, array.length))
  console.log('leftSorted', leftSorted)
  console.log('center', center)
  console.log('rightSorted', rightSorted)
  var newArray = []
  newArray = newArray.concat(leftSorted)
  newArray.push(center)
  newArray = newArray.concat(rightSorted)
  console.log('left + center + right', newArray)
  console.log('-------------------------------------------------------------------------')
  // console.log("newArray", newArray);
  return newArray
}
quickSort(input)
// console.log(quickSort(input))
