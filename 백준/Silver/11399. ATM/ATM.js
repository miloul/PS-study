const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, arr] = fs.readFileSync(filePath).toString().trim().split("\n");

n = +n;
let l1 = arr
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let result = l1[0];
for (let i = 1; i < n; i++) {
  l1[i] += l1[i - 1];
  result += l1[i];
}

console.log(result);
