const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const [l, c] = input[0].split(" ").map(Number);
const l1 = input[1].split(" ");

l1.sort((a, b) => {
  return a > b ? 1 : a < b ? -1 : 0;
});

let l1visited = new Array(c + 1).fill(0);
result = [];
let cnt = 0;

const isMo = (s) => {
  if (s == "a" || s == "e" || s == "i" || s == "o" || s == "u") return true;
  return false;
};

const makepw = (depth, nowidx) => {
  if (result.length === l) {
    if (cnt >= 1 && result.length - cnt >= 2) {
      console.log(result.join(""));
    }
  }

  for (let i = nowidx + 1; i <= c; i++) {
    if (isMo(l1[i - 1])) {
      cnt++;
    }
    if (!l1visited[i]) {
      result.push(l1[i - 1]);
      l1visited[i] = 1;
      makepw(depth + 1, i);
      l1visited[i] = 0;
      result.pop();
      if (isMo(l1[i - 1])) {
        cnt--;
      }
    }
  }
};

makepw(0, 0);
