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

lose = {
  'A': 'Z',
  'B': 'X',
  'C': 'Y'
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
  
  switch (you) {
    case 'X':
      total += score[lose[opp]]
      break;
    case 'Y':
      total += 3 + score[match[opp]]
      break;
    case 'Z':
      total += 6 + score[beats[opp]]
      break;
    default:
      break;
  }
})

console.log(total)