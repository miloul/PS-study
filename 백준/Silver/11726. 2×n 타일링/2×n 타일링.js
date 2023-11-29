let fs = require('fs');

const [n] = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);
//const [n] = fs.readFileSync(__dirname + '/ex2.txt').toString().split('\n').map(Number);

let t = new Array(1001).fill(0)

if (n === 0) return 0

function tile(n) {
    if (n === 1) return 1
    if (n === 2) return 2
    else if (t[n] != 0) return t[n]

    return t[n] = ((tile(n - 1) + tile(n - 2)) % 10007)
}

console.log(tile(n))