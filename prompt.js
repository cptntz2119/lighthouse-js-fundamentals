let prompt = require("prompt-sync")();

// code below (replace this example)
const num = Math.floor(Math.random() * 100 + 1);
//console.log(num);
let answer = prompt("Guess a number: ");
const inputNum = [];
let attemptNum = 0;

while (answer != num) {
  if (answer < num) {
    console.log(">" + answer + "\n" + "Too low");
    inputNum.push(answer);
    //console.log(inputNum);
    answer = prompt("Guess a number: ");
  } else if (answer > num) {
    console.log(">" + answer + "\n" + "Too high");
    inputNum.push(answer);
    //console.log(inputNum);
    answer = prompt("Guess a number: ");
  } else if (isNaN(answer)) {
    console.log(">" + answer + "\n" + "Not a number! Try again");
    //inputNum.push(answer); not a number, no count
    answer = prompt("Guess a number: ");
  } else if (answer === num) {
    break;
  }
}
const removeDuplicate = (arr) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1);
    res.push(arr[i]);
  }

  return res;
};

attemptNum = removeDuplicate(inputNum).length;

console.log(`\n You got it! you took ${attemptNum + 1} attempts`);
