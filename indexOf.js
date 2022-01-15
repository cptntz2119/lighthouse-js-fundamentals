function lastIndexOf(number, target){
  let length = number.length;
  let i = length - 1;
  while (i >= 0 && i < length){
    if (number[i] === target){
      break;
    }
    i--;  
  }
  return i;
}
 /* for (let i = length - 1; i < length; i--){
    if (number[i] === target){
      return i;
    }else {
      return -1;
    }

  }
}
*/
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
    

