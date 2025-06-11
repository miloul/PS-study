const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = Number(input[0]);
let dp = [1, 1, 1, 2, 2, 3, 4, 5, 7, ...new Array(93).fill(0)];

let result = [];

for (let i = 1; i <= t; i++) {
  const n = Number(input[i]);
  for (let j = 8; j < n; j++) {
    if (dp[j] == 0) {
      dp[j] = dp[j - 1] + dp[j - 5];
    }
  }
  result.push(dp[n - 1]);
}

console.log(result.join("\n"));
