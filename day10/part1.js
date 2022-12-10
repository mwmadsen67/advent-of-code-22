const fs = require('fs');
const operations = fs.readFileSync('puzzleinput.txt', 'utf8').split('\n').map(op => op.split(' '));

// console.log(operations)

let cycle = 0;
let register = 1;
let signal = 0

for (let i = 0; i < operations.length; i++) {
  let op = operations[i];
  

  if (cycle <= 220 && (cycle - 19) % 40 === 0) {
    signal += register * (cycle + 1)
    console.log(register * (cycle + 1))
  }
  
  if (op[0] === 'noop') {
    cycle += 1;
    
    continue;
  }
  if (op[0] === 'addx') {
    cycle += 1;
    if (cycle < 220 && (cycle - 19) % 40 === 0) {
      signal += register * (cycle + 1)
      console.log(register * (cycle + 1))
    }
    cycle += 1;
    register += parseInt(op[1]);
  }

}

console.log(signal)