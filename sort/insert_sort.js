const input = [15, 8, 20, 7, 66, 54, 18, 26]

// console.log("input", input);

function insertSort (array) {
  console.log('array', array)
  let newArray = [array[0]]
  for (var i = 1; i < array.length; i++) {
    newArray = insertNewOne(newArray, array[i])
  }
  console.log('newArray', newArray)
  return newArray
}

function insertNewOne (array, element) {
  // console.log("array", array, "element", element);
  for (var i = 0; i < array.length; i++) {
    if (element <= array[i]) {
      // console.log("index ", i);
      array.splice(i, 0, element)
      return array
    }
  }
  array.push(element)
  return array
}

insertSort(input)

// insertNewOne([8,15,20], 7)
// console.log(insertNewOne([8,15,20], 25));
