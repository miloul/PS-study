const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
let graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(" ").map(Number));
}

let dp = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => [0, 0, 0])
);

for (let i = 1; i < n; i++) {
  if (graph[0][i] === 1) break;
  dp[0][i][0] = 1;
}

for (let i = 1; i < n; i++) {
  for (let j = 1; j < n; j++) {
    if (graph[i][j] === 1) continue;

    dp[i][j][0] = dp[i][j - 1][0] + dp[i][j - 1][2];
    dp[i][j][1] = dp[i - 1][j][1] + dp[i - 1][j][2];

    if (graph[i - 1][j] === 0 && graph[i][j - 1] === 0) {
      dp[i][j][2] =
        dp[i - 1][j - 1][0] + dp[i - 1][j - 1][1] + dp[i - 1][j - 1][2];
    }
  }
}

console.log(dp[n - 1][n - 1][0] + dp[n - 1][n - 1][1] + dp[n - 1][n - 1][2]);
