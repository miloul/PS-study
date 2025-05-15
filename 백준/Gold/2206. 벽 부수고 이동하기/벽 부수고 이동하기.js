const fs = require("fs");
const { config } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const [n, m] = input[0].split(" ").map(Number);

let m1 = [];
for (let i = 1; i <= n; i++) {
  m1.push(input[i].split("").map(Number));
}

const bfs = () => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => Array(2).fill(0))
  );
  let q = [[0, 0, 1, 0]];
  visited[0][0][0] = 1;
  let idx = 0;
  while (idx !== q.length) {
    const [x, y, cnt, broken] = q[idx];
    if (x === n - 1 && y === m - 1) return cnt;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= n || nx < 0 || ny >= m || ny < 0) continue;
      // 갈 수 있으면
      if (m1[nx][ny] === 0 && !visited[nx][ny][broken]) {
        q.push([nx, ny, cnt + 1, broken]);
        visited[nx][ny][broken] = 1;
      }
      // 갈 수 없음 그러나 벽 부수기 가능
      else if (m1[nx][ny] === 1 && !visited[nx][ny][1] && !broken) {
        q.push([nx, ny, cnt + 1, 1]);
        visited[nx][ny][1] = 1;
      }
    }
    idx++;
  }
  return -1;
};

console.log(bfs());
