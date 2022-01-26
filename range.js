
function range(start, end, step){

  const resultNum = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0){
    return resultNum;
  }else {
    for (let i = start; i <= end; i += step){
    //console.log(i);
    resultNum.push(i);
    
  }
}
  return resultNum;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));