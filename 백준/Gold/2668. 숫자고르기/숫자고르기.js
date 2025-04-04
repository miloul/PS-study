const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

inputs.unshift(0);

let visited = new Array(n + 1).fill(0);
let result = [];

const dfs = (i) => {
  if (visited[i] == 1) {
    result.push(i);
    return;
  }
  visited[i] = 1;
  dfs(inputs[i]);
};

for (let i = 1; i <= n; i++) {
  dfs(i);
  visited.fill(0);
}

let r = Array.from(new Set(result));
console.log(r.length);
console.log(r.sort((a, b) => a - b).join("\n"));
