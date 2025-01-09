const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const n = Number(arr.shift());

let k1 = arr.indexOf("KBS1");
let k2 = arr.indexOf("KBS2");
k2 = k1 > k2 ? ++k2 : k2;

let result = "";

for (let i = 0; i < k1; i++) {
  //KBS1 찾고
  result += "1";
}

for (let i = 0; i < k1; i++) {
  //내리고
  result += "4";
}

for (let i = 0; i < k2; i++) {
  //KBS2 찾고
  result += "1";
}

for (let i = 0; i < k2 - 1; i++) {
  //내리고
  result += "4";
}

console.log(result);
