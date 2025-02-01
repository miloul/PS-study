const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("").map(Number);

let cnt0 = (cnt1 = 0);

for (const s of arr) {
  s === 0 ? cnt0++ : cnt1++;
}
const cnt0h = cnt0 / 2;
const cnt1h = cnt1 / 2;

for (let i = arr.length - 1; i > 0; i--) {
  if (arr[i] === 0) {
    arr[i] = "";
    cnt0--;
  }
  if (cnt0 === cnt0h) break;
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1) {
    arr[i] = "";
    cnt1--;
  }

  if (cnt1 === cnt1h) break;
}
console.log(arr.join(""));
