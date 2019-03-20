// Arrays

// Creating arrays practice --------------------------------------------------------------

// Literals

var friends = [];
var people = [];
var animals = [];
var cars = [];
var countries = [];
var streets = [];
var insects = [];
var currencies = [];
var shirts = [];
var addresses = [];
var cities = [];
var tools = [];
var cart = [];
var appendages = [];
var weapons = [];

// Array literals with length
var friends = ["him", "her"]; // friends.length; = 2
var people = ["Joe", "Jane"]; // people.length; = 2
var animals = ["dog", "cat", "lion", "coyote"]; // animals.length; = 4
var cars = ["audi", "bmw", "cadillac"]; // cars.length; = 3
var countries = ["usa", "canada", "mexico", "brazil"]; // countries.length; = 4
var streets = ["Memorial Dr.", "Glenwood Rd."]; // streets.length; = 2
var insects = ["honey-bee", "fire-ant", "yello-jacket"]; // insects.length; = 3
var currencies = ["US Dollar", "British Pound", "Japanese Yen", "Mexican Peso"]; // currencies.length; = 4
var shirts = ["t-shirt", "tank-top", "sweater"]; // shirts.length; = 3
var addresses = ["1600 Pennsylvania Ave.", "420 Fifth Ave.", "5280 Memorial Dr."]; // addresses.length; = 3
var cities = ["Tokyo", "Atlanta", "Rio de Janeiro", "New York", "Dallas"]; // friends.length; = 5
var tools = ["Hammer", "Saw", "Drill"]; // tools.length; = 3
var cart = ["Soccer jersey", "Running shoes", "Baseball cap", "Coat", "Fish food"]; // cart.length; = 5
var appendages = [{ fingers: 10 }, { toes: 10 }]; // appendages.length; = 2
var weapons = ["sword", "mace", "knife", "staff", "bow and arrows", "pistol", "rifle"]; // weapons.length; = 7

// Array constructors with length
var myNumbers = new Array(1, 3, 5, 7, 13, 31, 75); // myNumbers.length; = 7
var yourNumbers = new Array(0, 2, 8, 12, 86); // // yourNumbers.length; = 5

// Array constructor with arbitrary length
var someNumbers = new Array(10); // someNumbers.length; = 10
var moreNumbers = new Array(100); // moreNumbers.length; = 100

// Array of different values
var diffVals = [
  {
    planet: "Earth",
    species: "Human",
    status: "Endangered"
  },
  "endurance",
  "craftiness",
  "preserverance"
];

// Check if type is array
Array.isArray(diffVals); // returns true
Array.isArray(myNumbers); // returns true
Array.isArray(yourNumbers); // returns true
Array.isArray(someNumbers); // returns true
Array.isArray(appendages); // returns true
Array.isArray(weapons); // returns true
Array.isArray(cities); // returns true
Array.isArray(streets); // returns true
Array.isArray(addresses); // returns true
Array.isArray(animals); // returns true
Array.isArray(cars); // returns true
Array.isArray(demons); // returns false

// Iterating with for loop
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Fibonacci using arrays
let fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci1[2] = 1;

for (var i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

// Accessing and writing array elements
var nums = [];
for (var i = 0; i < 100; i++) {
  nums[i] = i + 1;
}

var firstNums = [1, 2, 3, 4, 5];
var secondNums = [];
secondNums[0] = firstNums[0] + firstNums[1];
secondNums[1] = firstNums[2] + firstNums[3];

// Creat arrays from strings
var sentence = "Get to the chopper pronto";
var words = sentence.split(" ");

for (var i = 0; i < words.length; i++) {
  console.log("word " + i + ": " + words[i]);
}

var phrase = "Keep calm and carry on";
var phraseWords = phrase.split(" ");

for (var i = 0; i < phraseWords.length; i++) {
  console.log("phrase part " + i + ": " + phraseWords[i]);
}

// Shallow copy an array (references the value at the same address)
var figures = [1, 2, 3, 4, 5];
var otherFigures = figures;

// Deep copy an array
function copy(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    arr2[i] = arr1[i];
  }
}

// Accessor functions

// indexOf()
let pets = ["dog", "cat", "goldfish", "parrot"];

let getPet = pets.indexOf("dog"); // 0
if (getPet >= 0) {
  console.log("Found element at position " + getPet);
}

// lastIndexOf()
var names = [
  "David",
  "Mike",
  "Noah",
  "Ken",
  "Cynthia",
  "Noah",
  "Raymond",
  "Clayton",
  "Jennifer",
  "Mike",
  "Ken"
];

var firstPosition = names.indexOf("Ken");
console.log("First position of Ken at " + firstPosition);
var secondPosition = names.lastIndexOf("Ken");
console.log("Last position of Ken at " + secondPosition);

// toString()
let names = ["David", "Mike", "Cynthia", "Raymond", "Clayton", "Jennifer", "Mike"];
let nameString = names.join("");
let newNames = names.toString();

// concat()
var workers = ["Mike", "Danny", "Jennifer"];
var bosses = ["Raymond", "Cynthia", "Bryan"];
var itDiv = workers.concat(bosses);
console.log(itDiv);

let hr = ["Barry", "Megan", "Walt", "Nicole"];
let employees = hr.concat(itDiv);
console.log(employees);

// splice()
let itDiv = ["Mike", "Danny", "Jennifer", "Raymond", "Cynthia", "Bryan"];
var dmpDept = itDiv.splice(3, 3); // start and end inclusive

// splice() in elements
// start at [3], remove none, add provided arguments
let itDiv = ["Mike", "Danny", "Jennifer", "Raymond", "Cynthia", "Bryan"];
var dmpDept = itDiv.splice(3, 0, "This", "That", "Other");

// Mutator functions ------------------------------------------------------------------------
// [Adding elements]

// Add elements with push()
var nums = [1, 2, 3, 4, 5];
nums.push(6, 7, 8);

// Add element with .length property
let nums = [1, 2, 3, 4, 5];
nums[nums.length] = 6;

// Unshift beginning of array manually
let nums = [2, 3, 4, 5];
var newNum = 1;
var N = nums.length;
for (var i = N; i >= 0; i--) {
  nums[i] = nums[i - 1];
}

nums[0] = newNum;

// Unshift beginning of array using unshift()
let nums = [2, 3, 4, 5];
nums.unshift(1);

let newNum = 1;
let nums = [3, 4, 5];
nums.unshift(newNum, 2);

// [Removing elements]

// Remove last element with a loop
var nums = [9, 1, 2, 3, 4, 5];

for (var i = 0; i < nums.length; ++i) {
  nums[i] = nums[i + 1];
}
