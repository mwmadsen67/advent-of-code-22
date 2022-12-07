const fs = require('fs');
let codeInput = fs.readFileSync('puzzleinput.txt', 'utf8').split('\n');

const rucksacks = codeInput.map(str => {
  const arr = [];
  arr.push(str.slice(0, str.length / 2));
  arr.push(str.slice(str.length / 2));
  return arr;
})

// console.log(rucksacks)
const shareditems = [];

for (let rucksack of rucksacks) {
  let numitems = {};
  let shared;
  for (let item of rucksack[0]) {
    numitems[item] = true;
  }

  for (let item of rucksack[1]) {
    if (numitems[item]) {
      shared = item;
      break;
    }
  }
  shareditems.push(shared);
}

let sum = 0;
for (let ele of shareditems) {
  let num = ele.charCodeAt(0);
  if (num < 91) {
    sum += num - 38;
  } else {
    sum += num - 96;
  }
}

console.log(sum)