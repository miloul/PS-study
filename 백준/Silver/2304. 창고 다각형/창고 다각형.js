const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
let l1 = [];

for (let i = 1; i <= n; i++) {
  const [l, h] = input[i].split(" ").map(Number);
  l1.push([l, h]);
}

l1.sort((a, b) => a[0] - b[0]);
let maxhi = 0;
for (let i = 0; i < l1.length; i++) {
  const tmp = l1[i][1];
  if (tmp >= l1[maxhi][1]) maxhi = i;
}

let result = l1[maxhi][1];
let now = l1[0][1];
let start = l1[0][0];

for (let i = 1; i <= maxhi; i++) {
  const tmp = l1[i][1];
  if (now <= tmp) {
    result += now * (l1[i][0] - start);
    now = tmp;
    start = l1[i][0];
  }
}
now = l1[l1.length - 1][1];
start = l1[l1.length - 1][0];
for (let i = l1.length - 2; i >= maxhi; i--) {
  const tmp = l1[i][1];
  if (now <= tmp) {
    result += now * (start - l1[i][0]);
    now = tmp;
    start = l1[i][0];
  }
}

console.log(result);
