// unshift()

let nums = [2, 3, 4];
nums.unshift(1); // [1, 2, 3, 4]

// or

let nums = [3, 4, 5];
nums.unshift(1, 2); // [ 1, 2, 3, 4, 5]

// or

let newNum = 1;
let nums = [3, 4, 5];
nums.unshift(2);
nums.unshift(newNum);

// Using a for loop
let nums = [2, 3, 4, 5];
let newNum = 1;
let N = nums.length;
for (var i = N; i >= 0; i--) {
  nums[i] = nums[i - 1];
}

nums[0] = newnum; // [1, 2, 3, 4, 5];
