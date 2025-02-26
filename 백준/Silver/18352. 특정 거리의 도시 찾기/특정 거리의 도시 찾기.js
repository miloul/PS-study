const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, k, x] = input[0].split(" ").map(Number);

let graph = Array.from(new Array(n + 1), () => new Array());

for (let i = 1; i <= m; i++) {
  const [p, q] = input[i].split(" ").map(Number);
  graph[p].push(q);
}

let result = [];
// bfs
let visited = new Array(n + 1).fill(0);
let q = [[x, 0]];
let index = 0;
while (index < q.length) {
  let [node, len] = q[index++];
  visited[node] = 1;
  if (len === k) {
    result.push(node);
  }
  for (const no of graph[node]) {
    if (visited[no]) continue;
    q.push([no, len + 1]);
    visited[no] = 1;
  }
}

console.log(
  result.length === 0 ? "-1" : result.sort((a, b) => a - b).join("\n")
);
