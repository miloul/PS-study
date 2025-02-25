const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let graph = Array.from(new Array(n + 1), () => new Array());

for (let i = 1; i <= m; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

// dfs
const dfs = (startnode, visited) => {
  if (visited[startnode]) return;
  visited[startnode] = 1;
  for (const node of graph[startnode]) {
    dfs(node, visited);
  }
};

cnt = 0;
let visited = new Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(i, visited);
    cnt++;
  }
}
console.log(cnt);
