const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(arr[0]);
const l1 = arr[1].split(" ").map(Number);
let m = Number(arr[2]);

let min = 1;
let max = Math.max(...l1);

while (min <= max) {
  const mid = Math.floor((min + max) / 2);
  let total = 0;

  for (let i = 0; i < n; i++) {
    if (l1[i] < mid) {
      total += l1[i];
    } else {
      total += mid;
    }
  }

  if (total <= m) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(max);
