const fs = require('fs');
const motions = fs.readFileSync('puzzleinput.txt', 'utf8').split('\n').map(motion => motion.split(' '));

const positions = new Set();
let h = [0,0];
let t = [0,0];
positions.add(t.toString());

for (let motion of motions) {
  let dir;
  switch (motion[0]) {
    case 'R':
      dir = [0,1]
      break;
    case 'L':
      dir = [0,-1]
      break;
    case 'U':
      dir = [-1,0]
      break;
    case 'D':
      dir = [1,0]
      break;  
    default:
      break;
  }
  let num = parseInt(motion[1]);
  for (let i = 0; i < num; i++) {
    h = [h[0]+dir[0], h[1]+dir[1]]
    if (Math.abs(h[0] - t[0]) > 1 && h[1] === t[1]) {
      // higher or lower
      t[0] += dir[0]
    } else if (Math.abs(h[1] - t[1]) > 1 && h[0] === t[0]) {
      // lefter or righter
      t[1] += dir[1]
    } else if (Math.abs(h[0] - t[0]) > 1 && h[1] !== t[1]) {
      t[0] += dir[0]
      t[1] = h[1]
    } else if (Math.abs(h[1] - t[1]) > 1 && h[0] !== t[0]) {
      t[1] += dir[1]
      t[0] = h[0]
    }
    // console.log(h, t)
    if (!positions.has(t.toString())) {
      positions.add(t.toString())
    }
  }
}

console.log(positions.size)