const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const n = Number(arr[0]);
const word = arr[1];
let answer = 0;

for (let i = 2; i <= n; i++) {
  let tmp = arr[i];
  if (
    Math.abs(word.length - tmp.length) > 1 ||
    Math.abs(new Set(word).size - new Set(tmp).size > 1)
  )
    continue;

  for (const w of word) {
    tmp = tmp.replace(w, "");
  }

  if (tmp.length < 2) answer++;
}

console.log(answer);
