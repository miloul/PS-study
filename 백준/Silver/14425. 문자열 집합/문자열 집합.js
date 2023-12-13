let fs = require('fs');

let inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
//let inputs = fs.readFileSync(__dirname + '/ex.txt').toString().split('\n');

const [n, m] = inputs[0].split(' ').map(Number)
let h1 = new Map()
let cnt = 0

for (let i=1; i<=n+m; i++) {
    const str = inputs[i].trim()
    if (i<=n) {
        h1.set(str)
    }
    else {
        if (h1.has(str)) {
            cnt++
        }
    }
}

console.log(cnt)