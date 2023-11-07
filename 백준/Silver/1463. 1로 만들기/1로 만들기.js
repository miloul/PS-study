let fs = require('fs');

const inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
//const inputs = fs.readFileSync(__dirname+'/ex2.txt').toString().split('\n');

const n = Number(inputs[0]);

let dp = [0, 0, 1, 1, 2];
for (let i=5; i<n+1; i++) {
    let a3 = a2 = 10000, a1 = dp[i-1];
    if (i%3 === 0) {
        a3 = dp[i/3];
    }
    if (i%2 === 0) {
        a2 = dp[i/2];
    }
    dp.push(1 + Math.min(a1, a2, a3));
}

console.log(dp[n]);