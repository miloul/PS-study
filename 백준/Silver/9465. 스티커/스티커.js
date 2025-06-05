const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = Number(input[0]);

const getScore = (sticker, n) => {
  let dp = Array.from(new Array(2), () => new Array(n).fill(0));
  if (n >= 1) {
    dp[0][0] = sticker[0][0];
    dp[1][0] = sticker[1][0];
  }
  if (n > 1) {
    dp[0][1] = sticker[0][1] + dp[1][0];
    dp[1][1] = sticker[1][1] + dp[0][0];
  }

  for (let i = 2; i < n; i++) {
    let max = Math.max(dp[0][i - 2], dp[1][i - 2]);
    dp[0][i] = Math.max(dp[1][i - 1], max) + sticker[0][i];
    dp[1][i] = Math.max(dp[0][i - 1], max) + sticker[1][i];
  }
  console.log(Math.max(dp[0][n - 1], dp[1][n - 1]));
};

let idx = 1;
for (let i = 1; i <= t; i++) {
  const n = Number(input[idx++]);
  let sticker = [];
  sticker.push(input[idx++].split(" ").map(Number));
  sticker.push(input[idx++].split(" ").map(Number));
  getScore(sticker, n);
}
