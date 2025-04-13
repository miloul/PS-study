const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, arr, goal] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

n = +n;
let result = Infinity;
let cnt;
let str = arr;

function toggle(idx) {
  if (str[idx] === "0") str = str.slice(0, idx) + "1" + str.slice(idx + 1);
  else str = str.slice(0, idx) + "0" + str.slice(idx + 1);
}

const changezero = (zero) => {
  if (zero) {
    toggle(0);
    toggle(1);
    cnt++;
  }
  for (let i = 1; i < n; i++) {
    if (str[i - 1] !== goal[i - 1]) {
      cnt++;
      toggle(i - 1);
      toggle(i);
      if (i < n - 1) {
        toggle(i + 1);
      }
    }
    if (str === goal) result = Math.min(result, cnt);
  }
};

cnt = 0;
changezero(true);
str = arr;
cnt = 0;
changezero(false);

console.log(result === Infinity ? -1 : result);
