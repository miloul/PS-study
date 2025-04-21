const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, arr] = fs.readFileSync(filePath).toString().trim().split("\n");

n = +n;
let l1 = arr
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const isGood = (idx) => {
  let start = 0;
  let end = l1.length - 1;

  while (start < end) {
    let sum = l1[start] + l1[end];

    if (start === idx) {
      start += 1;
      continue;
    } else if (end === idx) {
      end -= 1;
      continue;
    }

    if (sum === l1[idx]) return true;
    else if (sum > l1[idx]) end--;
    else start++;
  }
};

let cnt = 0;
for (let i = 0; i < n; i++) {
  if (isGood(i)) {
    cnt++;
  }
}

console.log(cnt);
