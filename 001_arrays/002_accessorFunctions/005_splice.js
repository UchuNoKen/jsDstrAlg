// splice()
// ...start position, end position, inclusive of start

let itDiv = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer", "Raymond", "Cynthia", "Bryan"];
let frontendDevs = itDiv.splice(3, 3);
// ["Danny", "Jennifer", "Raymond"]

// (start at index 3, remove 0, add 3 names)
let itDiv = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer", "Raymond", "Cynthia", "Bryan"];
itDiv.splice(3, 0, "Joe", "Mary", "Doug");
// ["Mike", "Clayton", "Terrill", "Joe", "Mary", "Doug", "Danny", "Jennifer", "Raymond", "Cynthia", "Bryan"]

// (start at 4, remove 2, add 2 names)
let itDiv = [
  "Mike",
  "Clayton",
  "Terrill",
  "Joe",
  "Mary",
  "Doug",
  "Danny",
  "Jennifer",
  "Raymond",
  "Cynthia",
  "Bryan"
];
itDiv.splice(4, 2, "Grinch", "Thor");
// ["Mike", "Clayton", "Terrill", "Joe", "Grinch", "Thor", "Danny", "Jennifer", "Raymond", "Cynthia", "Bryan"]
