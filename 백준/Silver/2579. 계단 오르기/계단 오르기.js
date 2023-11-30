let fs = require('fs');

const inputs = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);
//const inputs = fs.readFileSync(__dirname + '/ex2.txt').toString().split('\n').map(Number);

const n = inputs[0]
let stair = inputs.slice(1)

let result = new Array(n + 1).fill(0)

for (let i = 0; i < n; i++) {
    if (i == 0) {
        result[i] = stair[0]
    } else if (i == 1) {
        result[i] = stair[0] + stair[1]
    } else if (i === 2) {
        result[i] = Math.max(stair[0], stair[1]) + stair[2]
    } else {
        result[i] = Math.max(result[i - 2], result[i - 3] + stair[i - 1]) + stair[i]
    }

}

console.log(result[n - 1])