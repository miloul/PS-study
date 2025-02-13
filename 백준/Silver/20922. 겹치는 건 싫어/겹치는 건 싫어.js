const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const l1 = input[1].split(" ").map(Number);

let cntlist = new Array(100001).fill(0);

let start = 0;
let end = 0;
let result = 0;
while (start < n) {
  if (cntlist[l1[start]] !== k) {
    cntlist[l1[start]]++;
    start++;
  } else {
    cntlist[l1[end]]--;
    end++;
  }
  result = Math.max(result, start - end);
}

console.log(result);
