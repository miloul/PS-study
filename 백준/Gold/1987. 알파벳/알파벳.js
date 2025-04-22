const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const [r, c] = input[0].split(" ").map(Number);

const alp = [];
for (let i = 1; i <= r; i++) {
  alp.push(input[i].split(""));
}

let map = new Map();

for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (!map.get(alp[i][j])) {
      map.set(alp[i][j], 1);
    }
  }
}

let max = 1;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const dfs = (x, y, dept) => {
  map.set(alp[x][y], 0);

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx >= r || nx < 0 || ny < 0 || ny >= c) continue;
    if (map.get(alp[nx][ny])) {
      dfs(nx, ny, dept + 1);
      max = Math.max(dept + 1, max);
    }
  }
  map.set(alp[x][y], 1);
};

dfs(0, 0, 1);
console.log(max);
