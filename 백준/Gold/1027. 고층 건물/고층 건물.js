const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let xs = input[1].split(" ").map(Number);
let result = 0;
for (let i = 0; i < n; i++) {
  let rightmax = -Infinity;
  let leftmin = Infinity;
  let cnt = 0;
  // left
  for (let j = i - 1; j >= 0; j--) {
    let tmp = (xs[i] - xs[j]) / (i - j);
    if (tmp < leftmin) {
      cnt++;
      leftmin = tmp;
    }
  }
  // right
  for (let j = i + 1; j < n; j++) {
    let tmp = (xs[i] - xs[j]) / (i - j);
    if (tmp > rightmax) {
      cnt++;
      rightmax = tmp;
    }
  }
  result = Math.max(result, cnt);
}

console.log(result);
