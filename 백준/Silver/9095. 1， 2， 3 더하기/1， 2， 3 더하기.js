const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = Number(input[0]);

let res = new Array(12).fill(0);
res[1] = 1;
res[2] = 2;
res[3] = 4;

let result = [];

for (let i = 1; i <= t; i++) {
  const n = Number(input[i]);
  for (let j = 4; j <= n; j++) {
    if (res[j] === 0) {
      res[j] = res[j - 3] + res[j - 2] + res[j - 1];
    }
  }
  result.push(res[n]);
}

console.log(result.join("\n"));
