const fs = require('fs');
const motions = fs.readFileSync('example2.txt', 'utf8').split('\n').map(motion => motion.split(' '));

const positions = new Set();
let h = [0,0];
let one = [0,0];
let two = [0,0];
let thr = [0,0];
let fou = [0,0];
let fiv = [0,0];
let six = [0,0];
let sev = [0,0];
let eig = [0,0];
let t = [0,0];
positions.add(t.toString());

const moveKnots = (first, second) => {
    if (Math.abs(first[0] - second[0]) > 1 && first[1] === second[1]) {
      // higher or lower
      if (first[0] > second[0]) second[0] += 1 
      if (first[0] < second[0]) second[0] -= 1       
    } else if (Math.abs(first[1] - second[1]) > 1 && first[0] === second[0]) {
      // lefter or righter
      if (first[1] > second[1]) second[1] += 1 
      if (first[1] < second[1]) second[1] -= 1
    } else if (Math.abs(first[0] - second[0]) > 1 && first[1] !== second[1]) {
      if (first[0] > second[0]) second[0] += 1 
      if (first[0] < second[0]) second[0] -= 1 
      second[1] = first[1]
    } else if (Math.abs(first[1] - second[1]) > 1 && first[0] !== second[0]) {
      if (first[1] > second[1]) second[1] += 1 
      if (first[1] < second[1]) second[1] -= 1
      second[0] = first[0]
    }
    
}

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
    moveKnots(h,one)
    moveKnots(one, two)
    moveKnots(two, thr)
    moveKnots(thr, fou)
    moveKnots(fou, fiv)
    moveKnots(fiv, six)
    moveKnots(six, sev)
    moveKnots(sev, eig)
    moveKnots(eig, t)

    if (!positions.has(t.toString())) {
      positions.add(t.toString())
    }    
  }
}

// 2456 too high
console.log(positions.size)