const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs.readFileSync(filePath).toString().trim().split("\n");

const getMin = (graph, n) => {
  let nx = [-1, 1, 0, 0];
  let ny = [0, 0, -1, 1];
  let cost = Array.from(new Array(n + 1), () =>
    new Array(n + 1).fill(Infinity)
  );
  let q = [[0, 0]];
  let front = 0;
  cost[0][0] = graph[0][0];

  while (q.length > front) {
    const [x, y] = q[front++];
    for (let i = 0; i < 4; i++) {
      const dx = x + nx[i];
      const dy = y + ny[i];
      if (
        dy >= 0 &&
        dx >= 0 &&
        dy < n &&
        dx < n &&
        cost[dx][dy] > cost[x][y] + graph[dx][dy]
      ) {
        cost[dx][dy] = cost[x][y] + graph[dx][dy];
        q.push([dx, dy]);
      }
    }
  }
  return cost[n - 1][n - 1];
};

let result = [];
let idx = 0;
while (true) {
  let n = Number(arr[idx++]);
  if (n === 0) break;

  let graph = [];

  for (let i = idx; i < idx + n; i++) {
    graph.push(arr[i].split(" ").map(Number));
  }
  idx += n;

  result.push(getMin(graph, n));
}

for (let i = 0; i < result.length; i++) {
  console.log(`Problem ${i + 1}:`, result[i]);
}
