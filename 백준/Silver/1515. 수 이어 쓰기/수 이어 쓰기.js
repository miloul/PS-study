const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs.readFileSync(filePath).toString().trim().split("");

let now = 0;
let idx = 0;
while (idx < arr.length) {
  now++;
  const nowstr = now.toString();
  for (let i = 0; i < nowstr.length; i++) {
    if (nowstr[i] === arr[idx]) {
      idx++;
    }
  }
}

console.log(now);
