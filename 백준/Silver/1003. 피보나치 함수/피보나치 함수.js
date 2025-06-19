const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);

let dp = Array.from(new Array(41), () => new Array());
dp[0] = [1, 0];
dp[1] = [0, 1];
dp[2] = [1, 1];
dp[3] = [1, 2];

let result = [];

for (let t = 1; t <= n; t++) {
  const k = Number(input[t]);
  for (let i = 4; i <= k; i++) {
    if (dp[i].length === 0) {
      dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
      dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
    }
  }
  result.push(dp[k].join(" "));
}

console.log(result.join("\n"));
