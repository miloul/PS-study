const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T * 2; i = i + 2) {
  const n = Number(input[i]);
  const juga = input[i + 1].split(" ").map(Number);
  let max = 0;
  let good = 0;
  for (let j = n; j >= 0; j--) {
    if (juga[j] > max) max = juga[j];
    else if (juga[j] < max) good += max - juga[j];
  }
  console.log(good);
}
