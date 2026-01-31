const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let t = Number(input[0]);
let cnt = 1;
while (t > 0) {
  let result = 0;
  const [m, n, k] = input[cnt].split(" ").map(Number);
  let graph = Array.from(Array(m), () => new Array(n).fill(0));
  let visited = Array.from(Array(m), () => new Array(n).fill(0));
  let q = [];
  for (let j = 0; j < k; j++) {
    let [a, b] = input[cnt + j + 1].split(" ").map(Number);
    graph[a][b] = 1;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] && !visited[i][j]) {
        q.push([i, j]);
        visited[i][j] = 1;
        let head = 0;
        while (head < q.length) {
          let [x, y] = q[head++];
          const nx = [-1, 1, 0, 0];
          const ny = [0, 0, -1, 1];
          for (let i = 0; i < 4; i++) {
            if (x + nx[i] < 0 || x + nx[i] >= m) continue;
            if (y + ny[i] < 0 || y + ny[i] >= n) continue;
            if (graph[x + nx[i]][y + ny[i]] && !visited[x + nx[i]][y + ny[i]]) {
              q.push([x + nx[i], y + ny[i]]);
              visited[x + nx[i]][y + ny[i]] = 1;
            }
          }
        }
        result++;
      }
    }
  }
  console.log(result);

  cnt += k + 1;
  t--;
}
