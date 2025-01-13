const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let cnt = 0;
while (n !== 0) {
  if (n >= 3) {
    n = n - 3;
  } else {
    n = n - 1;
  }
  cnt++;
}

const result = cnt % 2 == 0 ? "CY" : "SK";

console.log(result);
