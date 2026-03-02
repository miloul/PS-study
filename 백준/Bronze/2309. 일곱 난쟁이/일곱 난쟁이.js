const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = 0;
for (let i = 0; i < 9; i++) {
  sum += input[i];
}

let result = [];
let nan = 0;
for (let i = 0; i < 9; i++) {
  for (let j = i + 1; j < 9; j++) {
    nan = input[i] + input[j];
    if (sum - nan == 100) {
      for (let k = 0; k < 9; k++) {
        if (k != i && k != j) result.push(input[k]);
      }
      i = 9;
      break;
    }
  }
}

console.log(result.sort((a, b) => a - b).join("\n"));
