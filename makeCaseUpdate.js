const runCase = function (input, caseValue) {
  // Put your solution here
  if (caseValue === "upper") {
    const strToArr = input.split(" ");
    //console.log(strToArr);
    // string to Arr
    const allUpper = strToArr.map((word) => word.toUpperCase());
    //console.log(firstToUpper);
    //uperCase of every word
    const result = allUpper.join(" ");
    //make the arr into a new string again with upperCase of all word

    // change the 1st letter to be lowercase
    return result;
  }

  if (caseValue === "lower") {
    const strToArr = input.split(" ");
    //console.log(strToArr);
    // string to Arr
    const allLower = strToArr.map((word) => word.toLowerCase());
    //console.log(firstToUpper);
    //uperCase of every word
    const result = allLower.join(" ");
    //make the arr into a new string again with upperCase of all word

    // change the 1st letter to be lowercase
    return result;
  }

  if (caseValue === "camel") {
    const strToArr = input.split(" ");
    //console.log(strToArr);
    // string to Arr
    const firstToUpper = strToArr.map(
      (word) => word[0].toUpperCase() + word.substring(1)
    );
    //console.log(firstToUpper);
    //uperCase of every word
    const result = firstToUpper.join("");
    //make the arr into a new string again with upperCase of all word
    const resultCamel = result[0].toLowerCase() + result.substring(1);
    // change the 1st letter to be lowercase
    return resultCamel;
  }

  if (caseValue === "pascal") {
    const strToArr = input.split(" ");
    //console.log(strToArr);
    // string to Arr
    const firstToUpper = strToArr.map(
      (word) => word[0].toUpperCase() + word.substring(1)
    );
    //console.log(firstToUpper);
    //uperCase of every word
    const resultPascal = firstToUpper.join("");
    //make the arr into a new string again with upperCase of all word

    // change the 1st letter to be lowercase
    return resultPascal;
  }

  if (caseValue === "snake") {
    const strToArr = input.split(" ");
    //console.log(strToArr);
    // string to Arr

    //uperCase of every word
    const resultSnake = strToArr.join("_");
    //make the arr into a new string again with upperCase of all word

    // change the 1st letter to be lowercase
    return resultSnake;
  }

  if (caseValue === "kebab") {
    const strToArr = input.split(" ");
    //console.log(strToArr);
    // string to Arr

    //uperCase of every word
    const resultKebab = strToArr.join("-");
    //make the arr into a new string again with upperCase of all word

    // change the 1st letter to be lowercase
    return resultKebab;
  }

  if (caseValue === "title") {
    const strToArr = input.split(" ");
    //console.log(strToArr);
    // string to Arr
    const firstToUpper = strToArr.map(
      (word) => word[0].toUpperCase() + word.substring(1)
    );
    //uperCase of every word
    const resultKebab = firstToUpper.join(" ");
    //make the arr into a new string again with upperCase of all word

    // change the 1st letter to be lowercase
    return resultKebab;
  }

  if (caseValue === "vowel") {
    let strToArr = input.split(" ");
    //console.log(strToArr); //[ 'this', 'is', 'a', 'string' ]
    // string to Arr
    let newWord = [];
    let newLetter;
    const vowels = "aeiou";
    let findVowel = strToArr.map((word) => {
      for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
          newLetter = word[i].toUpperCase();
          //console.log(newWord);
        } else {
          newLetter = word[i];
        }
        newWord += newLetter;
      }
      newWord += " ";
      //console.log(newWord);
    });
    return newWord;
  }

  if (caseValue === "consonant") {
    let strToArr = input.split(" ");
    //console.log(strToArr); //[ 'this', 'is', 'a', 'string' ]
    // string to Arr
    let newWord = [];
    let newLetter;
    const vowels = "aeiou";
    let findVowel = strToArr.map((word) => {
      for (let i = 0; i < word.length; i++) {
        if (!vowels.includes(word[i])) {
          newLetter = word[i].toUpperCase();
          //console.log(newWord);
        } else {
          newLetter = word[i];
        }
        newWord += newLetter;
      }
      newWord += " ";
      //console.log(newWord);
    });
    return newWord;
  }
};

const makeCase = function (input, caseValue) {
  //console.log(typeof caseValue);
  if (typeof caseValue === "string") {
    return runCase(input, caseValue);
  } else {
    let firstRetrunStr = runCase(input, caseValue[0]);
    return runCase(firstRetrunStr, caseValue[1]);
  }
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["lower", "snake"]));
console.log(makeCase("this is a string", ["snake", "vowel"]));
