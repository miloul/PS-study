const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(arr[0]);
const di = arr[1].split(" ").map(BigInt);
let price = arr[2].split(" ").map(BigInt);
price.pop();

let total = 0n;
let nowPrice = price[0];
for (let i = 0; i < n - 1; i++) {
  if (price[i] < nowPrice) {
    nowPrice = price[i];
  }
  total += di[i] * nowPrice;
}

console.log(String(total));
