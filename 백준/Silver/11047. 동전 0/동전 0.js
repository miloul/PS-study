const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, k] = inputs[0].split(" ").map(Number);

function solution(list) {
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    let coin = list[i];
    if (k >= coin) {
      cnt += parseInt(k / coin);
      k = k % coin;
    }
  }
  return cnt;
}

console.log(solution(inputs.slice(1).reverse().map(Number)));
