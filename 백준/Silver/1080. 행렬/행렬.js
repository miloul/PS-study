const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const [n, m] = nm.split(" ").map(Number);

let before = [];
let after = [];

for (let i = 0; i < n; i++) {
  before.push(arr[i].split("").map(Number));
}

for (let i = n; i < n + n; i++) {
  after.push(arr[i].split("").map(Number));
}

const change = (startI, startJ) => {
  for (let i = startI; i < startI + 3; i++) {
    if (i >= n) continue;
    for (let j = startJ; j < startJ + 3; j++) {
      if (j >= m) continue;
      before[i][j] = 1 - before[i][j];
    }
  }
};

let cnt = 0;
for (let i = 0; i < n - 2; i++) {
  for (let j = 0; j < m - 2; j++) {
    if (before[i][j] != after[i][j]) {
      change(i, j);
      cnt++;
    }
  }
}

let flag = true;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (before[i][j] != after[i][j]) {
      cnt = -1;
      break;
    }
  }
}

console.log(flag ? cnt : -1);
