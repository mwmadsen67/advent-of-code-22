const fs = require('fs');
const codeInput = fs.readFileSync('puzzleinput.txt', 'utf8').split('\n');

const input = [[],[]];
let i = 0;
codeInput.forEach( line => {
  if (line === '') {
    i += 1;
  } else {
    input[i].push(line)
  }
})

// separate input into different sections
const crates = input[0].slice(0, input[0].length - 1)
const cratelabels = input[0].slice(input[0].length - 1)[0]
const directions = input[1]

// organize crates into actual stacks
const stacks = [];
const numstacks = cratelabels[cratelabels.length - 2]

for (let i = 0; i < numstacks; i++) {
  stacks.push([])
}

for (let level of crates) {
  for (let i = 1; i < level.length; i += 4) {
    if (level[i] !== ' ') stacks[(i-1)/4].push(level[i])
  }
}

// modify stacks based on directions

for (let move of directions) {
  let parts = move.split(' ')
  let num = parts[1];
  let stack1 = stacks[parts[3] - 1]
  let stack2 = stacks[parts[5] - 1]

  for (let i = 0; i < num; i++) {
    stack2.unshift(stack1[0]);
    stack1.splice(0,1)
  }
}

let result = ''

stacks.forEach(stack => {
  result += stack[0];
}) 

console.log(result)