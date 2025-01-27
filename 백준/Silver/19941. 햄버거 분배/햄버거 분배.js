const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const [n, k] = arr[0].split(" ").map(Number);

const input = arr[1].split("");
let cnt = 0;

// 나한테서 가장 먼 햄버거 && 왼쪽부터
for (let i = 0; i < input.length; i++) {
  if (input[i] === "P") {
    const max = i + k;
    const min = i - k;
    for (let j = min; j <= max; j++) {
      if (input[j] === "H") {
        input[j] = 0;
        cnt++;
        break;
      }
    }
  }
}

console.log(cnt);
