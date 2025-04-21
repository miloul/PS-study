const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, s] = input[0].split(" ").map(Number);
let l1 = input[1].split(" ").map(Number);

let minlen = Infinity;
let sum = 0;
let i = 0;
let j = 0;
while (j < n) {
  sum += l1[j];
  while (sum >= s) {
    sum -= l1[i];
    minlen = Math.min(minlen, j - i + 1);
    i++;
  }
  j++;
}

console.log(minlen !== Infinity ? minlen : 0);
