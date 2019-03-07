var words = ["ground", "control", "to", "major", "tom"];

// map(words, function(word) {
//   return word.length;
// });

// map(words, function(word) {
//   return word.toUpperCase();
// });

// map(words, function(word) {
//   return word.split('').reverse().join('');
// });

// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]

function map(data, doSomething){
let arr = [];
  for(let i = 0; i < data.length; i++){
    arr.push(doSomething(data[i]));
  }

  return arr;
}

console.log(map(words, function(word) {
  return word.length;
}));


console.log(map(words, function(word) {
  return word.toUpperCase();
}));

console.log(map(words, function(word) {
return word.split('').reverse().join('');
}));


// // So instead, let's pass in the function directly at the same time as we define
// forEachBackward(data, function(item) {
//   console.log(item);
// });

// function forEachBackward(thingsToPrint, doSomething) {
//   for(var i = thingsToPrint.length - 1; i >= 0; i--) {
//     // console.log(i, thingsToPrint[i]);
//     doSomething(thingsToPrint[i]);
//   }
// }

// We could define it, but we're only using it once!
// var printItem = function(item) {
//   console.log(item);
// }

