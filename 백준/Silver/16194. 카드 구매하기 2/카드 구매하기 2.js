const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, arr] = fs.readFileSync(filePath).toString().trim().split("\n");

n = +n;
arr = arr.split(" ").map(Number);

let dp = new Array(n + 1).fill(0);

for (let i = 0; i < n; i++) {
  let min = arr[i];
  for (let j = 0; j < i; j++) {
    min = Math.min(min, dp[i - j] + arr[j]);
  }
  dp[i + 1] = min;
}

console.log(dp[n]);
