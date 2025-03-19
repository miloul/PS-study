const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const res = +arr.pop();
const l1 = arr[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let start = 0;
let end = n - 1;
let answer = 0;

while (start < end) {
  if (l1[start] + l1[end] == res) {
    answer++;
    start++;
    end--;
  } else if (l1[start] + l1[end] > res) {
    end--;
  } else {
    start++;
  }
}

console.log(answer);
