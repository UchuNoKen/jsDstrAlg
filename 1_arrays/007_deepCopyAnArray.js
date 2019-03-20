// Deep copy an array

let arr1 = [];
let arr2 = [];

for (var i = 0; i < arr1.length; i++) {
  arr2[i] = arr1[i];
}

// Deep copy array with multiple values
let team1 = [
  { manager: "Joe Blow", players: 10, name: "Nimble Ninjas" },
  {
    schedule: {
      week1: "Home vs. team2",
      week2: "Away vs. team3"
    }
  },
  {
    record: {
      Wins: 10,
      Losses: 0,
      Draws: 0
    }
  }
];

for (var i = 0; i < arr1.length; i++) {
  arr2[i] = arr1[i];
}
