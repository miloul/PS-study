const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = arr[0].split(" ").map(Number);
const space = [];
for (let i = 1; i <= n; i++) {
  space.push(arr[i].split(" ").map(Number));
}

let result = [];
const dfs = (i, j, before, sum) => {
  // 왼쪽아래 -1, 아래 0, 오른쪽아래 1
  const direction = [-1, 0, 1];

  if (j >= m || j < 0) {
    // j 값 벗어나면 (달까지 못갔음)
    return;
  }

  if (i >= n) {
    // 달 도착하면
    result.push(sum);
    return;
  }

  sum = sum + space[i][j];

  for (let x = 0; x <= 2; x++) {
    if (before !== direction[x]) {
      dfs(i + 1, j + direction[x], direction[x], sum);
    }
  }
};

for (let j = 0; j < m; j++) {
  dfs(0, j, -2, 0);
}

console.log(Math.min(...result));
