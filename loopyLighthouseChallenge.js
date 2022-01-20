function loopyLighthouse(range, multiples, words){
  const numStart = range[0];
  const numEnd = range[1];
  const numMul1 = multiples[0];
  const numMul2 = multiples[1];
  const word1 = words[0];
  const word2 = words[1];
  

  for (let i = numStart; i <= numEnd; i++){
    if (i % numMul1 === 0 && i % numMul2 === 0){
      console.log(word1 + word2);
    }else if (i % numMul1  === 0){
      console.log(word1);
    }else if (i % numMul2 === 0){
      console.log(word2);
    }else{
      console.log(i);
    }
  }
  
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
//console.log(["Batty", "Beacon"]);