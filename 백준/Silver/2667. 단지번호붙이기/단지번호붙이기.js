const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
let m1 = [];
for (let i = 1; i <= n; i++) {
  m1.push(input[i].split("").map(Number));
}

let visited = Array.from(new Array(n + 1), () => new Array(n + 1).fill(0));

const bfs = (startx, starty) => {
  let house = 1;
  let q = [[startx, starty]];
  visited[startx][starty] = 1;
  let dx = [0, 0, 1, -1];
  let dy = [-1, 1, 0, 0];
  while (q.length) {
    let [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
      if (!visited[nx][ny] && m1[nx][ny] === 1) {
        q.push([nx, ny]);
        visited[nx][ny] = 1;
        house++;
      }
    }
  }

  return house;
};

let cnt = 0;
let result = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (m1[i][j] && !visited[i][j]) {
      result.push(bfs(i, j));
      cnt++;
    }
  }
}

console.log(cnt);
console.log(result.sort((a, b) => a - b).join("\n"));
