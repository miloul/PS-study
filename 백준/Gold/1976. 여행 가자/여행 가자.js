const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const m = Number(input[1]);

let graph = Array.from(new Array(n + 1), () => new Array());
for (let i = 2; i < n + 2; i++) {
  let l1 = input[i].split(" ").map(Number);
  for (let j = 0; j < l1.length; j++) {
    if (l1[j] === 1) {
      graph[i - 2].push(j + 1);
    }
  }
}
graph.unshift(graph.pop());

const order = input.pop().split(" ").map(Number);

let visited = new Array(n + 1).fill(0);
const dfs = (now) => {
  visited[now] = 1;
  for (const g of graph[now]) {
    if (!visited[g]) dfs(g);
  }
};

dfs(order[0]);

let result = "YES";
for (const o of order) {
  if (!visited[o]) {
    result = "NO";
  }
}

console.log(result);
