const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const [a, b] = input[1].split(" ").map(Number);

const k = Number(input[2]);
let graph = Array.from({ length: n + 1 }, () => []);

for (let i = 3; i < 3 + k; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const visited = new Array(n + 1).fill(-1);
const q = [];
q.push(a);
visited[a] = 0;
let head = 0;

while (head < q.length) {
  const v = q[head++];

  if (v === b) break;

  for (const node of graph[v]) {
    if (visited[node] === -1) {
      q.push(node);
      visited[node] = visited[v] + 1;
    }
  }
}

console.log(visited[b]);
