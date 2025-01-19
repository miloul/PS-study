// 1, 2, 3 더하기 4
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs.readFileSync(filePath).toString().trim().split("\n");

const t = Number(arr[0]);
let dp = new Array(10001).fill(1); // 모두 1로 더하는 경우

dp[2] = 2;
dp[3] = 3;
dp[4] = 4;

for (let i = 1; i <= t; i++) {
  const n = Number(arr[i]);
  for (let i = 5; i <= n; i++) {
    if (dp[i] === 1) {
      dp[i] += dp[i - 2] + dp[i - 3] - dp[i - 5];
    }
  }
  console.log(dp[n]);
}
