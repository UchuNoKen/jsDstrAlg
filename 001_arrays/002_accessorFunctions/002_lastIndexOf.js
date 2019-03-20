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
console.log(firstPosition); // 3

var secondPosition = names.lastIndexOf("Ken");
console.log(secondPosition); // 10

let countries = [
  "USA",
  "Germany",
  "Brazil",
  "Ethiopia",
  "India",
  "UK",
  "China",
  "Canada",
  "Mexico",
  "France",
  "Spain",
  "South Africa"
];

let firstAndLastPositions = arr => {
  let searchedCountry = prompt("Enter the country to find first and last occurence in the list: ");
  let firstPosition = arr.indexOf(searchedCountry);
  let lastPosition = arr.lastIndexOf(searchedCountry);

  if (firstPosition >= 0 && lastPosition >= 0) {
    console.log(`Found first position of '${searchedCountry}' at: ${firstPosition}`);
    if (firstPosition >= 0 && (lastPosition === firstPosition || lastPosition < 0)) {
      console.log(`Only one occurence of ${searchedCountry} found.`);
    } else if (firstPosition !== lastPosition && lastPosition >= 1) {
      console.log(`Found last position of '${searchedCountry}' at: ${lastPosition}`);
    }
  } else {
    console.log(`'${searchedCountry}' is not a country in the list.`);
  }
};
