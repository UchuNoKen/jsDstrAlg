var nums = [1, 2, 3, 7, 8, 9];
var newelements = [4, 5, 6];

nums.splice(2, 0, newelements);

// [1, 2, [4, 5, 6] 3, 7, 8, 9]
