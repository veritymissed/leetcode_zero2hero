const input = [15, 8, 20, 7, 66, 54, 18, 26]
console.log('input', input)

function selectionSort (array) {
  const newArray = []
  while (array.length >= 1) {
    var min = minOfArray(input)
    newArray.push(min)
    array.splice(array.indexOf(min), 1)
  }
  console.log('newArray', newArray)
  return newArray
}

function minOfArray (array) {
  let min = array[0]
  for (var i = 1; i < array.length; i++) {
    if (min >= array[i]) min = array[i]
  }
  return min
}

// 之後嘗試直接call js 的min library
selectionSort(input)
