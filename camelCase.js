const camelCase = function(input) {
  // Your code here
  const resultSring = "";
  const strToArr = input.split(' ');
  //console.log(strToArr);
  // string to Arr
  const firstToUpper = strToArr.map(word => word[0].toUpperCase() + word.substring(1));
  //console.log(firstToUpper);
  //uperCase of every word
  const result = firstToUpper.join('');
  //make the arr into a new string again with upperCase of all word  
  const firstToLower = result[0].toLowerCase() + result.substring(1);
  // change the 1st letter to be lowercase
  return firstToLower;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

/*
[ 'this', 'is', 'a', 'string' ]
[ 'This', 'Is', 'A', 'String' ]
ThisIsAString
thisIsAString
*/