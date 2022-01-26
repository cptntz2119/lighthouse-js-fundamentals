const organizeInstructors = function(instructors) {
  const resultIos= instructors.filter(arr => arr.course === "iOS");
  
  const resultWeb = instructors.filter(arr => arr.course === "Web");

  const resultBlockchain = instructors.filter(arr => arr.course === "Blockchain");
  let arrBlockchain = [];
  let arrIos = [];
  let arrWeb = [];

  const result = {
    Blockchain: arrBlockchain,
    iOS: arrIos,
    Web: arrWeb
  }
  
  
  //console.log(resultIos);
  //console.log(resultWeb);
  //console.log(resultBlockchain);
  //console.log(resultWeb.values);
  
  
  for (let ele of resultIos){
     ele.name;
     arrIos.push(ele.name);
     //console.log(arrIos);
  }
 
  for (let ele of resultWeb){
    ele.name;
    arrWeb.push(ele.name);
    //console.log(arrWeb);
 }

 
 for (let ele of resultBlockchain){
    ele.name;
    arrBlockchain.push(ele.name);
  //console.log(arrBlockchain);
}

for (let prop in result){
  if (result[prop].length === 0){
    delete result[prop];
  }
}
return result;
  

  //console.log(obj);
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
