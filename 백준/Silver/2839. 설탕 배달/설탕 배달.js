let fs = require('fs');

const inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
//const inputs = fs.readFileSync(__dirname+'/ex2.txt').toString().split('\n');

const n = Number(inputs[0]);


let l1 = [0, -1, -1, 1, -1, 1];
let k = 1000000
for (let i=6; i< n+1; i++) {
    let tmp = i - 3, tmp2 = i -5, m = 0;
    if (l1[tmp] !== -1) {
        k = l1[tmp]+1;
    }
    if (l1[tmp2] !== -1) {
        k = Math.min(k, l1[tmp2] + 1);
    }
    else if (l1[tmp] === -1 && l1[tmp2] === -1) {
        m = 1;
    }
    if (m === 0) {
        l1.push(k);
    }
    else {
        l1.push(-1);
    }
}

console.log(l1[n]);