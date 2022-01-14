function finalPosition(moves){
  const endPosition = [0,0]
  //var x = endPosition[0];
  //var y = endPosition[1];
  for (let move of moves){
    if (move === 'north'){
      endPosition[1] += 1;
      console.log(endPosition[1]);
      //endPosition[1].push;
       
    }else if (move === 'west'){
      endPosition[0] -= 1;
      console.log(endPosition[0]);
    }else if (move === 'east'){
      endPosition[0] += 1;
      console.log(endPosition[0]);
    }else if(move === 'south'){
      endPosition[1] -= 1;
      console.log(endPosition[1]);
    }  
    console.log(endPosition);

  }
  //return endPosition;
  console.log(endPosition);
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']; 

finalPosition(moves);