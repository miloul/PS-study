const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let l1 = [];
for (let i = 1; i <= n; i++) {
  l1.push(input[i].split(" ").map(Number));
}

let dp = Array.from({ length: n }, () => Array(m).fill(0n));
dp[0][0] = 1n;

let cells = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    cells.push([l1[i][j], i, j]);
  }
}
cells.sort((a, b) => b[0] - a[0]);

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
for (const h of cells) {
  let [now, i, j] = h;
  if (i === n - 1 && j == m - 1) continue;
  for (let k = 0; k < 4; k++) {
    let nx = i + dx[k];
    let ny = j + dy[k];
    if (nx < n && ny < m && nx >= 0 && ny >= 0 && l1[nx][ny] < now) {
      dp[nx][ny] += dp[i][j];
    }
  }
}

console.log(dp[n - 1][m - 1].toString());
