const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split("").map(Number));
}

let visited = Array.from(new Array(n), () => new Array(m).fill(0));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let q = [[0, 0, 1]];
visited[0][0] = 1;
let cnt = 0;

while (q.length) {
  const [x, y, dis] = q.shift();
  if (x == n - 1 && y == m - 1) console.log(dis);
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    if (graph[nx][ny] && !visited[nx][ny]) {
      q.push([nx, ny, dis + 1]);
      visited[nx][ny] = 1;
    }
  }
}
