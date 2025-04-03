const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, arr] = fs.readFileSync(filePath).toString().trim().split("\n");

n = +n;
let liq = arr.split(" ").map(Number);

let start = 0;
let end = n - 1;

let now = Infinity;
let s = 0;
let e = 0;

while (start < end) {
  let mid = liq[start] + liq[end];

  if (Math.abs(mid) <= now) {
    s = liq[start];
    e = liq[end];
    now = Math.abs(mid);
  }

  if (mid > 0) {
    end--;
  } else {
    start++;
  }
}

console.log(s, e);
