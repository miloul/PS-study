// 덩치

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(arr[0]);

let l1 = new Array(n).fill(1);
let p = [];

for (let i = 1; i <= n; i++) {
  const [x, y] = arr[i].split(" ").map(Number);
  p.push([x, y]);
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (p[i][0] > p[j][0] && p[i][1] > p[j][1]) {
      l1[j]++;
    }
  }
}

console.log(l1.join(" "));
