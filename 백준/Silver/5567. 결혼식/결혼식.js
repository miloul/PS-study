const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const m = Number(input[1]);

let graph = Array.from({ length: n + 1 }, () => []);

for (let i = 2; i < 2 + m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

let visited = new Array(n + 1).fill(0);
let q = [1];
visited[1] = 1;
let head = 0;
let cnt = 0;

while (head < q.length) {
  let node = q[head++];

  for (const next of graph[node]) {
    if (visited[next] === 0) {
      q.push(next);
      visited[next] = visited[node] + 1;
      if (visited[node] <= 2) {
        cnt++;
      }
    }
  }
}

console.log(cnt);
