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

var nums = [1, 2, 3, 4, 5];
Array.isArray(nums); // true

var cars = {
  sedan: "Audi A7",
  suv: "Porsche Cayenne"
};

Array.isArray(cars);
