/* 
    book: Data Structures and algorithms in javascript
*/

// Creating Arrays --------------------------------------------

var friends = [];   // array literal with length of 0
console.log(friends.length);  // logs 0

var numbers = [1, 2, 3, 4, 5];   // array literal with length of 5
console.log(numbers.length);  // logs 5

var numbers = new Array(1, 2, 3, 4, 5); // arr, length 5
console.log(numbers.length);
    
var numbers = new Array(10)     // arr, length of 10
console.log(numbers.length);

var objects = [1, 'Joe', true, null] // arr of different values

Array.isArray(objects);     // returns true

// Iterating array elements with a for loop --------------------
for(var i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}


// Fibonacci
var fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for(var i = 3; i < 20; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

for(var i = 1; i < fibonacci.length; i++){
    console.log(fibonacci[i]);
}

// Accessing and Writing Array Elements ------------------------

var nums = [];
for(var i = 0; i < 100; ++i){
    nums[i] = i + 1
}

var numbers = [1, 2, 3, 4, 5];
var sum = numbers[0] + numbers[1] + numbers[2] + numbers[3];


// Creating Arrays from strings

 var sentence = 'the quick brown fox jumped over the lazy dog';
 var words = sentence.split(" ");
 for(var i = 0; i < words.length; i++){
     print('word ' + i + ": " + words[i]);
 }


// Aggregate Operations

var numbers = [1, 2, 3, 4, 5];
var samenums = numbers;         // assign one arr to another

// shallow copy, changes on numbers arr reflect on the samenums
// array as it is assigned a reference


// Deep copy an array

function copy(arr1, arr2){
    for(var i = 0; i < arr1.length; ++1){
        arr2[i] = arr1[i];
    }
}

var nums = [];
for(var i = 0; i < 100; i++){
    nums[i] = i + 1;
}
var samenums = [];
copy(nums, samenums);


// Accessor Functions -------------------------------------------

// indexOf() : is argument passed to function in array

var names = ['David', 'Cynthia', 'Raymond', 'Clayton', 'Jennifer'];

var name = prompt('Enter a name to search for: ');
var position = names.indexOf(name);

if(position >= 0){
    console.log('Found ' + name + ' at position ' + position);
}
else{
    console.log(name + ' not found in array.');
}

// lastIndexOf() : is argument passed to function in array

var names = ['David', 'Mike', 'Noah', 'Ken', 'Cynthia', 'Noah', 'Raymond', 'Clayton', 'Jennifer', 'Mike', 'Ken'];

var name = prompt('Enter a name to search for: ');
var firstPos = names.indexOf(name);
console.log('First found ' + name + ' at position ' + firstPos);
var lastPos = names.lastIndexOf(name);
console.log('Last found ' + name + ' at position ' + lastPos);


// String representation of Arrays

var names = ['David', 'Mike', 'Cynthia', 'Raymond', 'Clayton', 'Jennifer', 'Mike'];
var namestr = names.join('');
names.toString();


// Creating new arrays from existing arrays ----------------------

var cis = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"]
var dmp = ["Raymond", "Cynthia", "Bryan"];
var itDiv = cis.concat(dmp)
console.log(itDiv)
itDiv = dmp.concat(cis);
print(itDiv);


// Splice
var itDiv = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
var dmpDept = itDiv.splice(3, 3);
console.log(dmpDept);
console.log(itDiv);

// splice in three more names
var itDiv = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
var dmpDept = itDiv.splice(3, 0, 'Joe', 'Pookie', 'Doug');
console.log(dmpDept);
console.log(itDiv);


// Mutator functions -------------------------------------------

// add elements to an array

var nums = [1, 2, 3, 4, 5];
console.log(nums);
nums.push(6);       // push 6 into the array
console.log(nums);

var nums = [1, 2, 3, 4, 5];
nums[nums.length] = 6;      // extend array with length property
console.log(nums);


// shift forward using a loop

var nums = [2, 3, 4, 5];
var newnum = 1;
var N = nums.length;
for(var i = N; i >= 0; i--){
    nums[i] = nums[i-1];
}

nums[0] = newnum;
console.log(nums);


// unshift()

var nums = [2,3,4,5];
console.log(nums); // 2,3,4,5
var newnum = 1;
nums.unshift(newnum);
console.log(nums); // 1,2,3,4,5
nums = [3,4,5];
nums.unshift(newnum,1,2);
console.log(nums);


// Removing elements from an array ----------------------------


// removing last array element with a loop
var nums = [9,1,2,3,4,5];
console.log(nums);
for (var i = 0; i < nums.length; i++) {
nums[i] = nums[i+1];
}
console.log(nums); // 1,2,3,4,5,


// removing last element with pop()
var nums = [1,2,3,4,5,9];
nums.pop();
console.log(nums); // 1,2,3,4,5


// shift() : removing elements from beginning of an array

var nums = [1,2,3,4,5,9];
nums.shift();
console.log(nums);


// Adding and removing elements from middle of an array ----------------------------

// splice() : starting index, number of elements to remove, elements
// to add to the array

// add with splice
var nums = [1,2,3,7,8,9];
var newlements = [4, 5, 6];

nums.splice(2, 0, newlements);
//   OR
nums.splice(3, 0, 4, 5, 6)
console.log(nums);

// remove with splice

var nums = [1,2,3,100, 200, 300, 400, 4,5,6];
nums.splice(3, 4);
console.log(nums);


// Putting array elements in order ----------------------------

// reverse order of elements in array

var nums = [3, 1, 2, 100, 4, 200];
nums.reverse();
console.log(nums);

// sort() : order elements lexicographically

var names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond"];
names.sort();
console.log(names);

// sort() needs ordering function for numbers

function compare(num1, num2){
    return num1 - num2;
}

var nums = [3, 1, 2, 100, 4, 200];
nums.sort(compare);     // pass compare function to sort()
console.log(nums)


// Iterator functions ------------------------------------------

// forEach() : operate on each element of an array

function square(num){
    console.log(num, num * num);
}

var nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach(square);

// every() : check if all array elements are true

function isEven(num){
    return num % 2 === 0;
}

function isOdd(num){
    return num % 2 !== 0;
}

var evenNums = [2,4,6,8,10];
var oddNums = [1, 3, 5, 7, 9];
evenNums.every(isEven);     true
oddNums.every(isEven);      false

// some() : check if some array elements are true

var evenNums = [2, 4, 6, 8, 10, 11];
var oddNums = [1, 3, 5, 7, 9, 10];
evenNums.some(isEven);
oddNums.some(isOdd);

// reduce() : reduces the array elements to a single value

function add(runningTotal, currentValue){
    return runningTotal + currentValue;
}

var nums =  [1,2,3,4,5,6,7,8,9,10];
var sum = nums.reduce(add);
console.log(sum);

// reduce() : to concat strings

function concat(accumulatedString, item){
    return accumulatedString + item;
}

var words = ['the', 'quick', 'brown', 'fox'];
var sentence = words.reduce(concat);
console.log(sentence);

// reduceRight() : same as reduce(), but from right to left

var words = ["the ", "quick ","brown ", "fox "];
var sentence = words.reduceRight(concat);
console.log(sentence); // displays "fox brown quick the"


// Iterator functions that return a new array -------------------

// map() and filter()

// map() : applies function to each element of an array

function curve(grade){
    return grade += 5;
}

var grades = [77, 65, 81, 92, 83];
var newGrades = grades.map(curve);
console.log(newGrades);

// string example with map()

function first(word){
    return word[0];
}

var words = ['for', 'your', 'information'];
var acronym = words.map(first);
console.log(acronym.join(''));     // logs fyi

// filter() : returns a new array of elements with true condition

function isEven(num){
    return num % 2 === 0;
}

function isOdd(num){
    return num % 2 !== 0;
}

var nums = [];
for(var i = 0; i < 20; i++){
    nums[i] = i + 1;
}

var evens = nums.filter(isEven);
console.log(`Even numbers: ${evens}`);

var odds = nums.filter(isOdd);
console.log(`Odd numbers: ${odds}`);

// filter() again

function passing(num){
    return num >= 60;
}

var grades = [];
for(var i = 0; i < 20; i++){
    grades[i] = Math.floor(Math.random()  * 101);
}

var passGrades = grades.filter(passing);
console.log('All grades: ');
console.log(grades);
console.log('Passing grades: ');
console.log(passGrades);

// filter() with strings

function afterC(str){
    if(str.indexOf('cie') > -1){
        return true;
    }
    return false;
}

var words = ["recieve","deceive","percieve","deceit","concieve"];
var misspelled = words.filter(afterC);
console.log(misspelled);


// Two dimensional and Multidimensional Arrays -------------------


// Two-dimensional arrays (spreadsheet: rows, columns)

var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
print(grades[2][2]); // displays 89

// crockford
Array.matrix = function(numrows, numcols, initial) {
    var arr = [];
    for (var i = 0; i < numrows; ++i) {
    var columns = [];
    for (var j = 0; j < numcols; ++j) {
    columns[j] = initial;
    }
    arr[i] = columns;
    }
    return arr;
    }


// Processing Two dimensional Array elements -------------------

var grades = [[89, 77, 78][76, 82, 81][91, 94, 89]];
var total = 0;
var average = 0.0;

for(var row = 0; row < grades.length; row++){
    for(var col = 0; col < grades[row].length; col++){
        total += grades[row][col];
    }
    average = total / grades[row].length;
    console.log('Student ' + parseInt(row + 1) + " average: " +
    average.toFixed(2));

    total = 0;
    average = 0.0;
}

//Student 1 average: 81.33
//Student 2 average: 79.67
//Student 3 average: 91.33

// row-wise computation (I think its col wise)

for(var col = 0; col < grades.length; col++){
    for(var row = 0; row < grades[col].length; row++){
        total += grades[row][col];
    }
    average = total / grades[col].length;
    console.log('Student ' + parseInt(col + 1) + " average: " +
    average.toFixed(2));

    total = 0;
    average = 0.0;
}

//Student 1 average: 81.33
//Student 2 average: 79.67
//Student 3 average: 91.33

