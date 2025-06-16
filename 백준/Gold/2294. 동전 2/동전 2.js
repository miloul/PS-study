const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
let coin = input.slice(1).map(Number);

let dp = new Array(k + 1).fill(Infinity);
dp[0] = 0;

for (let i = 0; i < n; i++) {
  for (let j = coin[i]; j <= k; j++) {
    dp[j] = Math.min(dp[j], dp[j - coin[i]] + 1);
  }
}

console.log(dp[k] === Infinity ? -1 : dp[k]);
