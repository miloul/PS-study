const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

let before = input[0];
let after = input[1];
let answer = 0;

const dfs = (now) => {
  if (now === before) {
    answer = 1;
    return;
  }
  if (now.length === 0) return;

  if (now[now.length - 1] === "A") dfs(now.slice(0, now.length - 1));
  if (now[0] === "B") dfs([...now.slice(1)].reverse().join(""));
};

dfs(after);
console.log(answer);
