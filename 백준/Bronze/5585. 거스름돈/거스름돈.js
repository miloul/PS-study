// 거스름돈

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let pay = 1000 - n;
let cnt = 0;

if (pay / 500 !== 0) {
  cnt += Math.floor(pay / 500);
  pay = pay % 500;
}
if (pay / 100 !== 0) {
  cnt += Math.floor(pay / 100);
  pay = pay % 100;
}

if (pay / 50 !== 0) {
  cnt += Math.floor(pay / 50);
  pay = pay % 50;
}
if (pay / 10 !== 0) {
  cnt += Math.floor(pay / 10);
  pay = pay % 10;
}

if (pay / 5 !== 0) {
  cnt += Math.floor(pay / 5);
  pay = pay % 5;
}
if (pay / 1 !== 0) {
  cnt += Math.floor(pay / 1);
}

console.log(cnt);
