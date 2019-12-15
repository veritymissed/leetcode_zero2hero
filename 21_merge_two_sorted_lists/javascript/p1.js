function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function(l1, l2) {
    var array = [];
    var pointer;

    pointer = l1;
    while(pointer != null){
        array.push(pointer.val)
        pointer = pointer.next
    }

    pointer = l2;
    while(pointer != null){
        array.push(pointer.val)
        pointer = pointer.next
    }


    var sorted_array = bubble_sorted(array)

    return array_to_list(sorted_array)

};

var bubble_sorted = function(array){
  for (var i = 0; i < array.length - 1; i++) {
    if(array[i] > array[i+1]){
      var temp = array[i]
      array[i] = array[i+1]
      array[i+1] = temp
    }
  }

  if (array.length > 2) {
    var end = array.pop();
    var sorted_array = bubble_sorted(array)
    if(sorted_array !== undefined){
      sorted_array.push(end)
      return sorted_array
    }
  }
  else{
    return array
  }

}

var array_to_list  = function(array) {
  var pointer;
  var head = null;

  for (var i = 0; i < array.length; i++) {
    if(head === null){
      head = new ListNode()
      pointer = head
    }
    pointer.val = array[i]
    if (i < array.length - 1) {
      pointer.next = new ListNode()
      pointer = pointer.next
    }
  }
  return head
}


// var test_array = [1,2,4,1,3,4];
// var result = bubble_sorted(test_array)
// console.log("result", result);
//
// var sorted_list = array_to_list(result)
// console.log("sorted_list", sorted_list);
