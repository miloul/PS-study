// 임스와 함께하는 미니게임

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const [n, game] = arr[0].split(" ");

const set = new Set();

for (let i = 1; i <= n; i++) {
  set.add(arr[i]);
}

let cnt = set.size;

cnt =
  game === "F" ? Math.floor(cnt / 2) : game === "O" ? Math.floor(cnt / 3) : cnt;

console.log(cnt);
