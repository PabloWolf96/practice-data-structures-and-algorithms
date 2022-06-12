/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let set = new Set();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let element = board[i][j];
      if (element === ".") {
        continue;
      }
      let currentSize = set.size;
      set.add(`${board[i][j]} found at row ${i}`);
      set.add(`${board[i][j]} found at column ${j}`);
      set.add(
        `${board[i][j]} found at box ${Math.floor(i / 3)} ${Math.floor(j / 3)}`
      );
      if (currentSize !== set.size - 3) {
        return false;
      }
    }
  }
  return true;
};
