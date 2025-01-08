const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs.readFileSync(filePath).toString().trim().split("\n");

const [h, w, n, m] = arr.shift().split(" ").map(Number);

let cnt = 0;
for (let i = 0; i < h; i = i + n + 1) {
  for (let j = 0; j < w; j = j + m + 1) {
    cnt += 1;
  }
}

console.log(cnt);
