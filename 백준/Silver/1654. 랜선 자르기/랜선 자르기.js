let fs = require('fs');

const inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
//const inputs = fs.readFileSync(__dirname + '/ex2.txt').toString().split('\n');

let [k, n] = inputs[0].split(' ').map(Number);
let l1 = [];

for (let i = 1; i <= k; i++) {
    l1.push(Number(inputs[i]))
}

let start = 1;
let end = Math.max(...l1);

while (start <= end) {
    let r = 0;
    let mid = ~~((start + end) / 2);
    for (let i = 0; i < k; i++) {
        r += ~~(l1[i] / mid);
    }
    if (r >= n) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}
console.log(end);