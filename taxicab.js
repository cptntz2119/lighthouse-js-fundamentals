const blocksAway = function (directions) {
  // Put your solution here
  let result = {};
  let eastDis = 0;
  let northDis = 0;
  let arrLength = directions.length;
  let carFacing = "default";
  let resultArr = [];

  for (let i = 0; i < arrLength; i = i + 2) {
    if (directions[i] === "right") {
      if (carFacing === "default") {
        carFacing = "east";
        resultArr.push(carFacing, directions[i + 1]);
      } else if (carFacing === "north") {
        carFacing = "east";
        resultArr.push(carFacing, directions[i + 1]);
      } else if (carFacing === "east") {
        carFacing = "south";
        resultArr.push(carFacing, directions[i + 1]);
      } else if (carFacing === "south") {
        carFacing = "west";
        resultArr.push(carFacing, directions[i + 1]);
      } else {
        carFacing = "north";
        resultArr.push(carFacing, directions[i + 1]);
      }
    } else {
      //console.log(i);
      if (carFacing === "default") {
        carFacing = "north";
        resultArr.push(carFacing, directions[i + 1]);
      } else if (carFacing === "east") {
        carFacing = "north";
        resultArr.push(carFacing, directions[i + 1]);
      } else if (carFacing === "north") {
        carFacing = "west";
        resultArr.push(carFacing, directions[i + 1]);
      } else if (carFacing === "west") {
        carFacing = "south";
        resultArr.push(carFacing, directions[i + 1]);
      } else {
        carFacing = "east";
        resultArr.push(carFacing, directions[i + 1]);
      }
    }
  }
  //console.log(resultArr);
  let north = 0,
    east = 0,
    west = 0,
    south = 0;
  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i] === "north") {
      north += resultArr[i + 1];
    }
    if (resultArr[i] === "south") {
      south += resultArr[i + 1];
    }
    if (resultArr[i] === "east") {
      east += resultArr[i + 1];
    }
    if (resultArr[i] === "west") {
      west += resultArr[i + 1];
    }
  }
  return { east: east - west, north: north - south };
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(
  blocksAway([
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
  ])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
