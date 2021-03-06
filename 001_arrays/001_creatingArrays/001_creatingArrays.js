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
var randomNums = new Array(31, 13, 5, 7, 75);
var lowTemps = new Array(-5, -13, -7, 0, 5);

// Array constructors with arbitrary length
var tenElements = new Array(10); // someNumbers.length; = 10
var hundredElements = new Array(100); // moreNumbers.length; = 100
var thousandElements = new Array(1000);
var tenThousandElements = new Array(10000);

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
