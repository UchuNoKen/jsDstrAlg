// creating arrays from strings

var sentence = "Get to the choppa everyone";
var wordsArray = sentence.split(" ");

for (var i = 0; i < wordsArray.length; i++) {
  console.log("Word " + i + ": " + wordsArray[i]);
}

var phrase = "At the end of the day, there is no place like home";
var phraseArray = phrase.split(" ");

for (var i = 0; i < phraseArray.length; i++) {
  console.log("Word " + i + ": " + phraseArray[i]);
}
