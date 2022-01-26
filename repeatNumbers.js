const repeatNumbers = function(data) {
  // Put your solution here
  
  let resultArr = [];
  for (arr of data){
    for (let i = 0; i < arr[1]; i++){
      resultArr += arr[0];
    }

    resultArr += ","
    //return resultArr;
  }
  
  return resultArr;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));