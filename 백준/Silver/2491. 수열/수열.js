const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

n = Number(n);

let inc = [1];
let dec = [1];

arr = arr.toString().split(" ").map(Number);

for (let i = 1; i < n; i++) {
  if (arr[i - 1] <= arr[i] || arr[i - 1] === arr[i]) {
    inc[i] = inc[i - 1] + 1;
  } else {
    inc[i] = 1;
  }

  if (arr[i - 1] >= arr[i] || arr[i - 1] === arr[i]) {
    dec[i] = dec[i - 1] + 1;
  } else {
    dec[i] = 1;
  }
}

const maxInc = Math.max(...inc);
const maxDec = Math.max(...dec);

console.log(Math.max(maxInc, maxDec));
