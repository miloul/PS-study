const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
let time = [];
for (let i = 1; i <= n; i++) {
  time.push(input[i].split(" ").map(Number));
}
time.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

let result = 1;
let end = time[0][1];
for (let i = 1; i < n; i++) {
  let [from, to] = time[i];
  if (from >= end) {
    end = to;
    result++;
  }
}
console.log(result);
