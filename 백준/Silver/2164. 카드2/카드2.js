// 카드2

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let l1 = [];
for (let i = 1; i <= n; i++) {
  l1.push(i);
}

for (let start = 0; start < n * 2; start = start + 2) {
  l1.push(l1[start + 1]);
}

console.log(l1[n * 2 - 2]);
