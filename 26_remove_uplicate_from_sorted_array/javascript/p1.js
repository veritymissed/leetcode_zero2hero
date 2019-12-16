// var nums = [0,0,1,1,1,2,2,3,3,4]
var nums = [1, 1]

var removeDuplicates = function(nums) {
    if(nums.length > 0){
      var filtered_nums = processingRemoveDuplicates(nums);
      nums.splice(0, nums.length)
      for(var i=0; i < filtered_nums.length; i++){
        nums.push(filtered_nums[i])
      }
      return filtered_nums.length
    }
    else{
      return nums.length
    }

};

var processingRemoveDuplicates = function(nums) {
  var newArray = []
  if (nums.length > 1) {
    var head = nums.shift()
    var rest = inspectDuplicates(head, nums)
    newArray.push(head)
    if(rest.length > 0) newArray = newArray.concat(processingRemoveDuplicates(rest))
  }
  else newArray.push(nums[0]) // only one element in array, return [element]
  return newArray
}

var inspectDuplicates = function(inspectNum ,array){
  var filtered_array = [];
  for (var i = 0; i < array.length; i++) {
    if(array[i] !== inspectNum) filtered_array.push(array[i])
  }
  return filtered_array
}
var final = removeDuplicates(nums)
console.log("final", final);
console.log("nums", nums);
