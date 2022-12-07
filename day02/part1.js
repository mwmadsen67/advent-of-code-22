const fs = require('fs');
let codeInput = fs.readFileSync('puzzleinput.txt', 'utf8').split('\n');

// console.log(codeInput)

beats = {
  'A': 'Y',
  'B': 'Z',
  'C': 'X'
}

match = {
  'A': 'X',
  'B': 'Y',
  'C': 'Z'
}

score = {
  'X': 1,
  'Y': 2,
  'Z': 3
}

let total = 0

codeInput.map(round => {
  let opp = round[0];
  let you = round[2]
  total += parseInt(score[you])
  switch (you) {
    case beats[opp]:
      total += 6
      break;
    case match[opp]:
      total += 3
      break;
    default:
      break;
  }
})

console.log(total)