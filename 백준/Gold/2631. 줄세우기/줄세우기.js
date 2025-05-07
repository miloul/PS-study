const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const n = Number(input.shift());
let l1 = input.map((a) => Number(a));

let dp = new Array(n + 1).fill(0);
for (let i = 0; i < n; i++) {
  dp[i] = 1;
  for (let j = 0; j < i; j++) {
    if (l1[i] > l1[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(n - Math.max(...dp));
