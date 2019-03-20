// indexOf

let pets = ["dog", "cat", "goldfish", "parrot"];
let petToSearch = "dog";
let getPet = pets.indexOf(petToSearch); // 0

// check and log index
if (getPets >= 0) {
  console.log(`Found '${petToSearch}' at position: ${getPet}`);
}

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

let countryToSearch = "Brazil";

let getCountry = countries.indexOf(countryToSearch);

if (getCountry >= 0) {
  console.log(`Found '${countryToSearch}' at position: ${getCountry}`);
}
