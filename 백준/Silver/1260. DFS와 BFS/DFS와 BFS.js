const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, v] = input[0].split(" ").map(Number);

let graph = Array.from(Array(n + 1), () => new Array());

for (let i = 1; i <= m; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

graph.forEach((element) => {
  //그래프 정렬
  element.sort((a, b) => a - b);
});

// bfs
const bfs = () => {
  let result = [];
  let visited = new Array(n + 1).fill(0);
  let q = [v];
  visited[v] = 1;
  while (q.length !== 0) {
    let node = q.shift();
    result.push(node);
    for (let i = 0; i < graph[node].length; i++) {
      if (visited[graph[node][i]]) continue;
      q.push(graph[node][i]);
      visited[graph[node][i]] = 1;
    }
  }
  return result.join(" ");
};

// dfs
let dfsr = [];
const dfs = (node, visited) => {
  if (visited[node]) return;
  visited[node] = 1;
  dfsr.push(node);
  for (let i = 0; i < graph[node].length; i++) {
    dfs(graph[node][i], visited);
  }
};

let visited = new Array(n + 1).fill(0);
dfs(v, visited);
console.log(dfsr.join(" "));
console.log(bfs());
