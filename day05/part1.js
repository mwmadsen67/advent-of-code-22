const fs = require('fs');
let codeInput = fs.readFileSync('puzzleinput.txt', 'utf8').split('\n');

const pairs = codeInput.map(line => line.split(',').map(section => section.split('-').map(num => parseInt(num))))

// console.log(pairs)
let count = 0;
for (let pair of pairs) {
  if (((pair[0][0] <= pair[1][0]) && (pair[0][1] >= pair[1][1])) || ((pair[0][0] >= pair[1][0]) && (pair[0][1] <= pair[1][1]))) {
    count += 1;
  }
}

console.log(count)