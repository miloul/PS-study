const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
let graph = [];
for (let i = 0; i < n; i++) {
  graph.push(input[i + 1].trim().split(""));
}

let visitedp = Array.from(Array(n), () => new Array(n).fill(0));
let visiteds = Array.from(Array(n), () => new Array(n).fill(0));

const bfs = (i, j, targetColor1, targetColor2, visited) => {
  let q = [[i, j]];
  visited[i][j] = 1;
  let head = 0;
  while (head < q.length) {
    let [x, y] = q[head++];
    const nx = [-1, 1, 0, 0];
    const ny = [0, 0, -1, 1];
    for (let i = 0; i < 4; i++) {
      if (x + nx[i] < 0 || x + nx[i] >= n) continue;
      if (y + ny[i] < 0 || y + ny[i] >= n) continue;
      if (!visited[x + nx[i]][y + ny[i]]) {
        if (
          graph[x + nx[i]][y + ny[i]] === targetColor1 ||
          graph[x + nx[i]][y + ny[i]] === targetColor2
        ) {
          q.push([x + nx[i], y + ny[i]]);
          visited[x + nx[i]][y + ny[i]] = 1;
        }
      }
    }
  }
};

let person = 0;
let sakyak = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === "R") {
      if (!visitedp[i][j]) {
        bfs(i, j, "R", "", visitedp);
        person++;
      }
      if (!visiteds[i][j]) {
        bfs(i, j, "R", "G", visiteds);
        sakyak++;
      }
    } else if (graph[i][j] === "B") {
      if (!visitedp[i][j]) {
        bfs(i, j, "B", "", visitedp);
        person++;
      }
      if (!visiteds[i][j]) {
        bfs(i, j, "B", "B", visiteds);
        sakyak++;
      }
    } else if (graph[i][j] === "G") {
      if (!visitedp[i][j]) {
        bfs(i, j, "G", "", visitedp);
        person++;
      }
      if (!visiteds[i][j]) {
        bfs(i, j, "G", "R", visiteds);
        sakyak++;
      }
    }
  }
}

console.log(person, sakyak);
