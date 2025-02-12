const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const l1 = input[1].split(" ").map(Number);

let result = new Array(n).fill(0);

for (let i = 0; i < l1.length; i++) {
  let tmp = l1[i] + 1;
  let idx = 0;
  while (true) {
    if (result[idx] === 0) {
      tmp--;
    }
    if (tmp === 0) break;
    idx++;
  }
  result[idx] = i + 1;
}

console.log(result.join(" "));
