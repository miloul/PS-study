const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

n = +n;

const dp = Array.from(Array(100001), () => Array(4).fill(0));
dp[1] = [0, 1, 0, 0];
dp[2] = [0, 0, 1, 0];
dp[3] = [0, 1, 1, 1];

const sum = new Array(100001).fill(0);
sum[1] = 1;
sum[2] = 1;
sum[3] = 3;

let result = [];
for (let i = 0; i < n; i++) {
  const k = Number(arr[i]);
  for (let j = 4; j <= k; j++) {
    if (sum[j]) continue;
    dp[j][1] = (dp[j - 1][2] + dp[j - 1][3]) % 1000000009;
    dp[j][2] = (dp[j - 2][1] + dp[j - 2][3]) % 1000000009;
    dp[j][3] = (dp[j - 3][2] + dp[j - 3][1]) % 1000000009;
    sum[j] = (dp[j][1] + dp[j][2] + dp[j][3]) % 1000000009;
  }
  result.push(sum[k]);
}
console.log(result.join("\n"));
