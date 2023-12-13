let fs = require('fs');

const [n] = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);
//const [n] = fs.readFileSync(__dirname + '/ex.txt').toString().split('\n').map(Number);

let m = 666;
let cnt = 0;

while (true) {
    if (m.toString().includes('666')) {
        cnt += 1
    }
    if (cnt === n) {
        break
    }
    m += 1
}

console.log(m)