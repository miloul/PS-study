const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nk, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [k, n] = nk.split(" ").map(Number);
for (let i = 0; i < k; i++) {
  input[i] = Number(input[i]);
}

let start = 1;
let end = Math.max(...input);
while (start <= end) {
  let mid = ~~((start + end) / 2);
  let cnt = 0;
  for (let i = 0; i < k; i++) {
    cnt += ~~(input[i] / mid);
  }
  if (cnt >= n) start = mid + 1;
  else end = mid - 1;
}

console.log(end);
