const fs = require('fs');
const commands = fs.readFileSync('example.txt', 'utf8').split('\n');

class Node {
  constructor(val, children, parent, size) {
    this.val = val;
    this.children = children;
    this.parent = parent;
    this.size = size
  }

  calcSize() {
    if (this.size > 0) return this.size
    let size = 0;
    this.children.forEach(child => {
      if (child.size) {
        size += child.size
      } else {
        size += child.calcSize();
      }
    })
    this.size = size
    return size
  }

  // the folder names are not unique
  findChild(val) {
    // if (val === this.val) return this;

    for (let child of this.children) {
      // let found = child.findChild(val);
      if (child.val === val) return child;
    }
    return null;
  }

  findDirs() {
    let sum = 0;
    if (this.size < 100000 && this.children.length > 0) {
      sum += this.size;
    }
    for (let child of this.children) {
      sum += child.findDirs()
    }
    return sum;
  }
}

let root = new Node('/', [], null, 0)
let parent = root;

commands.splice(0, 1)

commands.forEach((command) => {
  let cmd = command.split(' ');
  if (cmd[0] === '$') {
    switch (cmd[1]) {
      case 'cd':
        // console.log(cmd[2])
        if (cmd[2] === '..') {
          parent = parent.parent;
        } else {
          // console.log(parent.val, cmd[2])
          parent = parent.findChild(cmd[2])
        }
        break;
      case 'ls':
        // idk
        break;
      default:
        break;
    }
  } else if (cmd[0] === 'dir') {
    parent.children.push(new Node(cmd[1], [], parent, 0))
  } else {
    if (parent === null) console.log(cmd)
    // console.log(parent)
    parent.children.push(new Node(cmd[1], [], parent, parseInt(cmd[0])))
  }
})


root.calcSize()

console.log(root.findDirs())