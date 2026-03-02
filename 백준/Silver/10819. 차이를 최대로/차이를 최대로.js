const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
let nums = input[1].split(" ").map(Number);

let max = 0;
let used = Array(n).fill(false);
let perm = [];

function dfs(depth) {
  if (depth === n) {
    let sum = 0;
    for (let i = 0; i < n - 1; i++) {
      sum += Math.abs(perm[i] - perm[i + 1]);
    }
    max = Math.max(max, sum);
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!used[i]) {
      used[i] = true;
      perm.push(nums[i]);
      dfs(depth + 1);
      perm.pop();
      used[i] = false;
    }
  }
}

dfs(0);
console.log(max);
