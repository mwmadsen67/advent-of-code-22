const fs = require('fs');
let codeInput = fs.readFileSync('puzzleinput.txt', 'utf8').split('\n');

const badges = [];
let one = {};
let two = {};
codeInput.forEach((rucksack, i) => {
  if (i % 3 === 0) {
    for (let item of rucksack) {
      one[item] = true
    }
  } else if ((i - 1) % 3 === 0) {
    for (let item of rucksack) {
      if (one[item]) two[item] = true;
    }
  } else {
    for (let item of rucksack) {
      if (two[item]) {
        badges.push(item)
        one = {};
        two = {};
        break;
      }
    }
  }
})

// console.log(badges)

let sum = 0;
for (let ele of badges) {
  let num = ele.charCodeAt(0);
  if (num < 91) {
    sum += num - 38;
  } else {
    sum += num - 96;
  }
}
console.log(sum)
