const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
let dp = [[Number(input[1])]];
for (let i = 2; i <= n; i++) {
  dp.push(input[i].split(" ").map(Number));
}

for (let i = 1; i < n; i++) {
  for (let j = 0; j < dp[i].length; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][j] + dp[i][j];
    } else if (j === dp[i].length - 1) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i][j];
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1]) + dp[i][j];
    }
  }
}

console.log(Math.max(...dp[n - 1]));
