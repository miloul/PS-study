const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);

let stairs = [];

for (let i = 1; i <= n; i++) {
  stairs.push(Number(input[i]));
}

let dp = Array.from(new Array(n), () => new Array(2).fill(0));
dp[0][0] = 0;
dp[0][1] = stairs[0];

if (stairs.length >= 2) {
  dp[1][0] = stairs[1];
  dp[1][1] = dp[0][1] + stairs[1];
}

for (let i = 2; i < stairs.length; i++) {
  // 연속
  dp[i][1] = stairs[i] + dp[i - 1][0];
  // 연속 아님
  dp[i][0] = Math.max(...dp[i - 2]) + stairs[i];
}

console.log(Math.max(...dp[n - 1]));
