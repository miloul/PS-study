const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let cnt = (tmp = 1);
while (true) {
  if (tmp >= n) {
    break;
  }
  tmp += 6 * cnt;
  cnt++;
}

console.log(cnt);