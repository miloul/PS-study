const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(" ").map(Number));
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let visited = Array.from(new Array(n), () => new Array(m).fill(0));

const bfs = (sx, sy) => {
  let q = [[sx, sy]];
  visited[sx][sy] = 1;
  let size = 1;

  while (q.length) {
    let [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (visited[nx][ny] !== 1 && graph[nx][ny] === 1) {
        q.push([nx, ny]);
        visited[nx][ny] = 1;
        size++;
      }
    }
  }
  return size;
};

let cnt = 0;
let result = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 0) visited[i][j] = 1;
    else if (visited[i][j] === 0 && graph[i][j] === 1) {
      result = Math.max(result, bfs(i, j));
      cnt++;
    }
  }
}

console.log(cnt + "\n" + result);
