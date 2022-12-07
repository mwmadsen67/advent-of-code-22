const fs = require('fs');
const stream = fs.readFileSync('puzzleinput.txt', 'utf8');

// linked list?

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const isWindowUnique = arr => {
  const vals = {}
  arr.forEach(ele => {
    if (vals[ele]) {
      vals[ele] += 1
    } else {
      vals[ele] = 1
    }
  })

  for (val in vals) {
    if (vals[val] > 1) return false;
  }
  return true;
}

let curr = new Node(stream[0]);

const window = [curr.val];
let marker = true;

for (let i = 1; i < stream.length; i++) {
  let next = new Node(stream[i]);
  curr.next = next;
  curr = next;
  if (window.includes(stream[i])) {
    marker = false;
  }
  window.push(stream[i])
  if (window.length === 14 && marker) {
    console.log(i+1)
    break;
  } else if (window.length === 14){
    window.shift();
    if (isWindowUnique(window)) marker = true;
  }
}


