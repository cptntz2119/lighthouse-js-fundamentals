const urlDecode = function (text) {
  // Put your solution here
  const newText = text.replaceAll("%20", " ");
  const textToArr = newText.split("&");
  //console.log(textToArr);
  const obj = {};
  for (let i = 0; i < textToArr.length; i++) {
    let newArr = textToArr[i].split("=");
    obj[newArr[0]] = newArr[1];
  }
  return obj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
