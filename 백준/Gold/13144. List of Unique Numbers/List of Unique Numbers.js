const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const l1 = input[1].split(" ").map(Number);

let left = 0;
let right = 0;
let visited = new Array(n + 1).fill(0);
let answer = 0;
while (left <= right) {
  if (right >= n) {
    break;
  }

  while (visited[l1[right]]) {
    visited[l1[left]] = 0;
    left++;
  }

  answer += right - left + 1;
  visited[l1[right]] = 1;
  right++;
}

console.log(answer);
