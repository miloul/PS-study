const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let result = [];
let visited = new Array(n + 1).fill(0);

const backtracking = (depth, now) => {
  if (depth === m) {
    console.log(result.join(" "));
    return;
  }

  for (let i = now + 1; i <= n; i++) {
    if (!visited[i]) {
      result.push(i);
      visited[i] = 1;
      backtracking(depth + 1, i);
      visited[i] = 0;
      result.pop();
    }
  }
};

backtracking(0, 0);
