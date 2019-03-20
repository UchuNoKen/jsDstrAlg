// Iterating an array with for loop

let test = ["a", "b", "c", "d"];

for (var i = 0; i < test.length; i++) {
  console.log(test[i]);
}

// Fibonnaci implementation by iterating over array with for loop

let fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (var i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
