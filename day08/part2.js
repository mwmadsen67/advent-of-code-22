const fs = require('fs');
const trees = fs.readFileSync('puzzleinput.txt', 'utf8').split('\n').map(row => row.split('').map(num => parseInt(num)));

let bestscore = 0;

for (let i = 1; i < trees.length - 1; i++) {
  let row = trees[i];
  for (let j = 1; j < row.length - 1; j++) {
    let height = row[j];
    let left = 0;
    for (k = j - 1; k >= 0; k--) {
      if (row[k] >= height) {
        left += 1;
        break;
      } else {
        left += 1
      }
    }
    let right = 0;
    for (k = j + 1; k < row.length; k++) {
      if (row[k] >= height) {
        right += 1;
        break;
      } else {
        right += 1
      }
    }
    let top = 0;
    for (k = i - 1; k >= 0; k--) {
      if (trees[k][j] >= height) {
        top += 1;
        break;
      } else {
        top += 1
      }
    }
    let bottom = 0;
    for (k = i + 1; k < trees.length; k++) {
      if (trees[k][j] >= height) {
        bottom += 1;
        break;
      } else {
        bottom += 1
      }
    }
    let score = left * right * top * bottom;
    if (score > bestscore) bestscore = score;
  }
}

console.log(bestscore)