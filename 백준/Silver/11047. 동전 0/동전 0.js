const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let cnt = 0;

for (let i = n; i > 0; i--) {
  const c = Number(input[i]);
  if (c <= k) {
    cnt += Math.floor(k / c);
    k %= c;
  }
}

console.log(cnt);
