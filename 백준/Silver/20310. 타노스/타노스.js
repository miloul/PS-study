const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs.readFileSync(filePath).toString().trim().split("").map(Number);

let cnt0 = (cnt1 = 0);

for (const s of arr) {
  s === 0 ? cnt0++ : cnt1++;
}

let answer = [];
for (let i = 0; i < cnt0; i = i + 2) {
  answer.push(0);
}
for (let i = 0; i < cnt1; i = i + 2) {
  answer.push(1);
}

console.log(answer.join(""));
