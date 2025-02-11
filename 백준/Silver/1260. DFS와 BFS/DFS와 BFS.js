const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, v] = input[0].split(" ").map(Number);
let graph = [];
for (let i = 0; i <= n; i++) {
  graph.push([]);
}

for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

graph.forEach((element) => {
  //그래프 정렬
  element.sort((a, b) => a - b);
});

let dfsResult = [];

const dfs = (visited, v) => {
  visited[v] = 1;
  dfsResult.push(v);

  for (const q of graph[v]) {
    if (!visited[q]) {
      dfs(visited, q);
    }
  }
};

const bfs = () => {
  let visited = new Array(n + 1).fill(0);
  let bfsResult = [];
  let queue = [v];
  visited[v] = 1;

  while (queue.length > 0) {
    const node = queue.shift();
    bfsResult.push(node);

    for (const q of graph[node]) {
      if (!visited[q]) {
        queue.push(q);
        visited[q] = 1;
      }
    }
  }

  console.log(bfsResult.join(" "));
};

let visited = new Array(n + 1).fill(0);

dfs(visited, v);
console.log(dfsResult.join(" "));
bfs();
