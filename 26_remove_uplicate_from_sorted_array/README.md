# 20\. Remove Duplicates from Sorted Array

## Question

Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

### Example 1:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.

### Example 2:

Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.

### Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

Internally you can think of this:

```javascript
// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

意思是，直接檢查input array的address，這邊必須研究js的array reference，變數名稱是refer到address還是copy by valu要分清楚

有幾個測資有踢到鐵板：

```javascript
var nums = [1, 1]
```

```javascript
var nums = []
```

leetcode上161個testcase最後一個沒過：

```javascript
[-999,-999,-998,-998,-997,-997,-996,-996,-995,-995,-994,-994,-993,-993,-992,-992,-991,-991,-990,-990,-989,-989,-988,-988,-987,-987,-986,-986,-985,-985,-984,-984,-983,... 57555 more chars]
```
