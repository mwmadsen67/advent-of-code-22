const fs = require('fs');
const trees = fs.readFileSync('puzzleinput.txt', 'utf8').split('\n').map(row => row.split('').map(num => parseInt(num)));

const left = {};
const right = {};
const top = {};
const bottom = {};

const visited = new Set()
let visible = 0;

visible += trees[0].length * 2;

// check from left to right
for (let i = 1; i < trees.length - 1; i++) {
  let row = trees[i];
  
  // check from the left
  left[i] = row[0];
  visible += 1;

  for (let j = 1; j < row.length - 1; j++) {
    if (left[i] === 9) break;
    if (row[j] > left[i]) {
      visible += 1;
      left[i] = row[j];
      visited.add([i,j].toString())
    }
  }

  // check from the right
  right[i] = row[row.length - 1];
  visible += 1;

  for (let j = row.length - 2; j > 0; j--) {
    if (visited.has([i,j].toString())) break;
    if (right[i] === 9) break;
    if (row[j] > right[i]) {
      visible += 1;
      right[i] = row[j];
      visited.add([i,j].toString())
    }
  }
}

for (let i = 1; i < trees[0].length - 1; i++ ) {
  // check top to bottom
  top[i] = trees[0][i];
  for (let j = 1; j < trees.length - 1; j++) {
    if (top[i] === 9) break;
    let col = trees[j];
    if (col[i] > top[i] && !visited.has([j,i].toString())) {
      visible += 1;
      top[i] = col[i];
      visited.add([j,i].toString())
    } else if (col[i] > top[i] && visited.has([j,i].toString())) {
      top[i] = col[i];
    }
  }

  // check bottom to top
  bottom[i] = trees[trees.length - 1][i];
  for (let j = trees.length - 2; j > 0; j--) {
    if (bottom[i] === 9) break;
    let col = trees[j];
    if (col[i] > bottom[i] && !visited.has([j,i].toString())) {
      visible += 1;
      bottom[i] = col[i];
      visited.add([j,i].toString())
    } else if (col[i] > bottom[i] && visited.has([j,i].toString())) {
      bottom[i] = col[i];
    }
  }
}

console.log(visible)