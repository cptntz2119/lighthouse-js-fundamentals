const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

function judgeVegetable(arrVeg, char){
  let maxVal = arrVeg[0][char];
  let winner = '';
  for (let i = 0; i < arrVeg.length; i++){ 
    if (arrVeg[i][char] >= maxVal){
      maxVal = arrVeg[i][char];
      winner = arrVeg[i].submitter;
    }
    //return winner;
    //console.log(winner);
    //console.log(maxVal);
  }
  return winner;
}

console.log(judgeVegetable(vegetables, metric));