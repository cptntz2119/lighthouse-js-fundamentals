//let whiteQueen = [0, 5];
//let blackQueen = [5, 0];
let whiteQueen = [0, 0];
let blackQueen = [5, 7];

let wqx = whiteQueen[0];
let wqy = whiteQueen[1];
let bqx = blackQueen[0];
let bqy = blackQueen[1];
let dx = wqx - bqx;
let dy = wqy - bqy;

const board = [...new Array(8)].map((elem) => new Array(8));
let generatedBoard = () => {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (i === wqx && j === wqy) {
        board[i][j] = 1;
      } else if (i === bqx && j === bqy) {
        board[i][j] = 1;
      } else {
        board[i][j] = 0;
      }
    }
  }

  return board;
};

const queenThreat = () => {
  if (dx == 0 || dy == 0 || dx == dy || dx == -dy) {
    return true;
  } else {
    return false;
  }
};

console.log(generatedBoard());
console.log(queenThreat(generatedBoard));
