const squareCode = function (message) {
  const newStr = message.replaceAll(" ", "");
  //console.log(newStr);
  const length = newStr.length;
  //console.log(length);
  const squareRoot = Math.ceil(Math.sqrt(length));
  //console.log(squareRoot);
  let resultStr = "";
  const numDifference = squareRoot * squareRoot - length;
  //console.log(numDifference);
  for (let i = 0; i < squareRoot; i++) {
    for (let j = 0; j < squareRoot; j++) {
      if (typeof newStr[i + j * squareRoot] === "string") {
        resultStr += newStr[i + j * squareRoot];
      } else {
        resultStr += "";
      }
    }

    resultStr += " ";
    resultStr.replaceAll("undefined", "");
  }

  return resultStr;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
