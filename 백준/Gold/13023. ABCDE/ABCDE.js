// ABCDE
// depth 4
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let graph = Array.from(new Array(n + 1), () => new Array());
let visited = new Array(n + 1).fill(0);

for (let i = 1; i <= m; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let result = 0;

const dfs = (node, depth) => {
  visited[node] = 1;
  if (result) return;
  if (depth === 4) {
    result = 1;
    return;
  }
  for (const g of graph[node]) {
    if (!visited[g]) dfs(g, depth + 1);
  }
  visited[node] = 0;
};

for (let i = 0; i < n; i++) {
  if (result) break;
  dfs(i, 0);
}

console.log(result);
