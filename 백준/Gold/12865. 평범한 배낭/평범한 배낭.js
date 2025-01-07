// 평범한 배낭

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = arr.shift().split(" ").map(Number);

const dp = Array.from(Array(n + 1), () => new Array(k + 1).fill(0));

for (let i = 1; i <= n; i++) {
  const [w, v] = arr[i - 1].split(" ").map(Number);
  for (let j = 1; j <= k; j++) {
    dp[i][j] = dp[i - 1][j];
    if (j >= w) {
      dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - w] + v);
    }
  }
}

console.log(dp[n][k]);
