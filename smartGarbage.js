
function smartGarbage(trash, bins){
  const val = Object.values(bins);
  const bin = Object.keys(bins);
  //console.log(bin);
  //console.log(val);
  //console.log(trash);
  length = Object.values(bins).length;
  for (let i=0; i < length; i++) {
    if (trash === bin[i]){
       
      bins[trash] = val[i] += 1; //here .notation doest not work, use [trash]
      //console.log(val[i]);
       
    }
    //console.log(bins);
    //bins[trash] = a;  
  }
//return bins;
//console.log(val);
console.log(bins);


}

smartGarbage('compost', { waste: 4, recycling: 2, compost: 5 });