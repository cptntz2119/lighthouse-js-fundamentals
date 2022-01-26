const calculateChange = function (total, cash) {
  // Your code here
  let change = cash - total;
  let changeToString = change.toString();
  //console.log(changeToString);
  
  

  const result = {
    twentyDollar: '',
    tenDollar: '',
    fiveDollar: '',
    twoDollar: '',
    oneDollar: '',
    quarter: '',
    dime: '',
    nickel: '',
    penny: ''
  };

  

  if (changeToString.length === 4) {
    result.twentyDollar = Math.floor(changeToString[0] / 2);
    result.tenDollar = changeToString[0] % 2;
    result.fiveDollar = Math.floor(changeToString[1] / 5);
    result.twoDollar = Math.floor((changeToString[1] % 5) / 2);
    result.oneDollar = (changeToString[1] % 5) % 2;
    result.dime = Number(changeToString[2]);
    result.nickel = Math.floor(changeToString[3] / 5);
    result.penny = changeToString[3] % 5;

    let changeToQuarter = 10 * result.dime + 5 * result.nickel;
    if (changeToQuarter >= 25) {
      result.quarter = Math.floor(changeToQuarter / 25);
      remain = changeToQuarter % 25;

      result.dime = Math.floor(remain / 10);

      result.nickel = 0;
    }
    
  }

  if (changeToString.length === 3) {
    //console.log(changeToString[1] / 2);
    result.fiveDollar = Math.floor(changeToString[0] / 5);
    //console.log(typeof(result.fiveDollar));
    result.twoDollar = Math.floor((changeToString[0] % 5) / 2);
    result.oneDollar = (changeToString[0] % 5) % 2;
    //console.log(result.oneDollar);
    result.dime = Number(changeToString[1]);
    //console.log(typeof(changeToString[1]));
    result.nickel = Math.floor(changeToString[2] / 5);
    result.penny = changeToString[2] % 5;
    //console.log(result.penny);

    let changeToQuarter = 10 * result.dime + 5 * result.nickel;
    if (changeToQuarter >= 25) {
      result.quarter = Math.floor(changeToQuarter / 25);
      remain = changeToQuarter % 25;

      result.dime = Math.floor(remain / 10);

      result.nickel = 0;

    }

    
    
  }

  if (changeToString.length === 2) {
    result.dime = changeToString[0];
    result.nickel = Math.floor(changeToString[0] / 5);
    result.penny = changeToString[1] % 5;

    let changeToQuarter = 10 * result.dime + 5 * result.nickel;
    if (changeToQuarter >= 25) {
      result.quarter = Math.floor(changeToQuarter / 25);
      remain = changeToQuarter % 25;

      result.dime = Math.floor(remain / 10);

      result.nickel = 0;

    }
    
  }

  if (changeToString.length === 1) {
    result.nickel = Math.floor(changeToString[0] / 5);
    result.penny = changeToString[0] % 5;

    
  }
  
  for (let prop in result){
    if (result[prop] === 0 || result[prop] === ''){
      delete result[prop];
    }
  }
  return result;
}
// how do I delete that key, when value is 0 or '' ??????, solved!

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));