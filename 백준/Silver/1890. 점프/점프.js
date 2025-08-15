const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
let l1 = [];
for (let i = 1; i <= n; i++) {
  l1.push(input[i].split(" ").map(Number));
}

let dp = Array.from({ length: n }, () => Array(n).fill(0n));
dp[0][0] = 1n;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let k = l1[i][j];
    if (k === 0) continue;
    if (i + k < n) {
      dp[i + k][j] += dp[i][j];
    }
    if (j + k < n) {
      dp[i][j + k] += dp[i][j];
    }
  }
}

console.log(dp[n - 1][n - 1].toString());
