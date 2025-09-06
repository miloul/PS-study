const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const m = Number(input[1]);

let graph = Array.from({ length: n + 1 }, () => []);

for (let i = 2; i < m + 2; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const visit = [];
const q = [];
q.push(1);
visit[1] = true;
let cnt = 0;

while (q.length) {
  const v = q.pop();

  for (const node of graph[v]) {
    if (!visit[node]) {
      q.push(node);
      visit[node] = true;
      cnt++;
    }
  }
}

console.log(cnt);
