const fs = require('fs');
const operations = fs.readFileSync('puzzleinput.txt', 'utf8').split('\n').map(op => op.split(' '));

// console.log(operations)

let cycle = 0;
let register = 1;

const grid = [];

for (let i = 0; i < operations.length; i++) {
  let op = operations[i];
  

  if (cycle <= 240 && (cycle - 40) % 40 === 0) {
    grid.push([])
    for (let j = 0; j < 40; j++) {
      grid[grid.length - 1].push('.')
    }
  }

  if ((cycle % 40) === register - 1 || (cycle % 40) === register || (cycle % 40) === register + 1) {
    grid[grid.length - 1][cycle % 40] = '#'
  }
  
  if (op[0] === 'noop') {
    cycle += 1;
    
    continue;
  }
  if (op[0] === 'addx') {
    cycle += 1;
    if (cycle <= 240 && (cycle - 40) % 40 === 0) {
      grid.push([])
      for (let j = 0; j < 40; j++) {
        grid[grid.length - 1].push('.')
      }
    }
    if ((cycle % 40) === register - 1 || (cycle % 40) === register || (cycle % 40) === register + 1) {
      grid[grid.length - 1][cycle % 40] = '#'
    }
    cycle += 1;
    register += parseInt(op[1]);
  }

}
const visgrid = grid.map(row => row.join(' '))
console.log(visgrid)