const { KeyObject } = require("crypto");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const [n, m] = arr[0].split(" ").map(Number);

let keyword = new Map();
for (let i = 1; i <= n; i++) {
  keyword.set(arr[i], 1);
}

let answer = [];
for (let i = n + 1; i <= n + m; i++) {
  const letter = arr[i].split(",");
  for (const l of letter) {
    if (keyword.get(l)) {
      keyword.delete(l);
    }
  }
  answer.push(keyword.size);
}

console.log(answer.join("\n"));
