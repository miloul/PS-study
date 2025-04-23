const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, c] = input.shift().split(" ").map(Number);
let home = [];
input.forEach((a) => home.push(Number(a)));
home.sort((a, b) => a - b);

let start = 1;
let end = home[n - 1] - home[0] + 1;

while (start <= end) {
  let mid = ~~((start + end) / 2);

  let cnt = 1;
  let lastlo = home[0];
  for (let i = 1; i < home.length; i++) {
    let lo = home[i];
    if (lo - lastlo >= mid) {
      cnt++;
      lastlo = lo;
    }
  }

  if (cnt >= c) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(end);
