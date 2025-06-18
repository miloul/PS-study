const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);

let dp = Array.from(new Array(n + 1), () => new Array());
dp[1] = [1];
dp[2] = [2, 1];
dp[3] = [3, 1];

for (let i = 4; i <= n; i++) {
  dp[i] = [i, ...dp[i - 1]];

  if (i % 3 === 0 && dp[i].length > dp[i / 3].length) dp[i] = [i, ...dp[i / 3]];
  if (i % 2 === 0 && dp[i].length > dp[i / 2].length) dp[i] = [i, ...dp[i / 2]];
}

console.log(dp[n].length - 1 + "\n" + dp[n].join(" "));
