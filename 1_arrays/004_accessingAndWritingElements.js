// Accessing and writing array elements
var nums = [];
for (var i = 0; i < 100; i++) {
  nums[i] = i + 1;
}

var firstNums = [1, 2, 3, 4, 5];
var secondNums = [];
secondNums[0] = firstNums[0] + firstNums[1];
secondNums[1] = firstNums[2] + firstNums[3] + firstNums[4];
