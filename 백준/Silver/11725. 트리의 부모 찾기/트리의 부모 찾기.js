const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...t] = fs.readFileSync(filePath).toString().trim().split("\n");

n = +n;
let graph = Array.from(new Array(n + 1), () => new Array());
let isParent = new Array(n + 1).fill(0);
isParent[1] = 1;

for (let i = 0; i < n - 1; i++) {
  const [x, y] = t[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

const getParent = (start) => {
  let q = [start];
  while (q.length > 0) {
    let now = q.shift();
    for (const g of graph[now]) {
      if (isParent[g] === 0) {
        q.push(g);
        isParent[g] = now;
      }
    }
  }
};

getParent(1);
console.log(isParent.slice(2).join("\n"));
