const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const n = Number(input.shift());

let answer = [];
let max = 0;

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    let s1 = input[i];
    let s2 = input[j];
    let len = s1.length > s2.length ? s2.length : s1.length;
    let nowmax = 0;
    for (let l = 0; l < len; l++) {
      if (s1[l] !== s2[l]) {
        if (max < nowmax) {
          max = nowmax;
          answer = [s1, s2];
        }
        break;
      }
      nowmax++;
    }

    if (max < nowmax) {
      max = nowmax;
      answer = [s1, s2];
    }
  }
}

console.log(answer.join("\n"));
