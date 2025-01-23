const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, x] = arr[0].split(" ").map(Number);
const visit = arr[1].split(" ").map(Number);

let cnt = (max = 0);

let sum = new Array(n + 2).fill(0);
sum[0] = 0;
for (let i = 0; i < n; i++) {
  sum[i + 1] = visit[i] + sum[i];
}

for (let i = 0; i <= n - x; i++) {
  let sumx = sum[i + x] - sum[i];
  if (max < sumx) {
    max = sumx;
    cnt = 1;
  } else if (max === sumx) {
    cnt++;
  }
}

if (max === 0) {
  console.log("SAD");
} else {
  console.log(max);
  console.log(cnt);
}
