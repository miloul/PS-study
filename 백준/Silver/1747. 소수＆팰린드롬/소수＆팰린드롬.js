const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);

const MAX = 2000000;
let dp = Array(MAX + 1).fill(true);
dp[0] = false;
dp[1] = false;
dp[2] = true;
for (let i = 0; i < MAX; i++) {
  if (dp[i] === true) {
    for (let j = i + i; j < MAX + 1; j += i) {
      dp[j] = false;
    }
  }
}

while (true) {
  let str = String(n);
  let reverse = [...str].reverse().join("");
  if (str === reverse && dp[n]) {
    console.log(n);
    break;
  }
  n++;
}
