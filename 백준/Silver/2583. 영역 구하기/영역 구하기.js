const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [m, n, k] = input[0].split(" ").map(Number);
let graph = Array.from(Array(m), () => new Array(n).fill(0));
for (let i = 1; i <= k; i++) {
  let [ax, ay, bx, by] = input[i].split(" ").map(Number);
  for (let y = ay; y < by; y++) {
    for (let x = ax; x < bx; x++) {
      graph[y][x] = 1; // 배열은 [y][x]!!
    }
  }
}

let visited = Array.from(Array(m), () => new Array(n).fill(0));
let result = [];
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] == 0 && !visited[i][j]) {
      let q = [[i, j]];
      visited[i][j] = 1;
      let head = 0;
      while (head < q.length) {
        let [row, col] = q[head++];
        const nx = [-1, 1, 0, 0];
        const ny = [0, 0, -1, 1];
        for (let d = 0; d < 4; d++) {
          let nr = row + nx[d];
          let nc = col + ny[d];
          if (nr < 0 || nr >= m) continue;
          if (nc < 0 || nc >= n) continue;
          if (graph[nr][nc] == 0 && !visited[nr][nc]) {
            q.push([nr, nc]);
            visited[nr][nc] = 1;
          }
        }
      }
      result.push(q.length);
    }
  }
}

console.log(result.length + "\n" + result.sort((a, b) => a - b).join(" "));
