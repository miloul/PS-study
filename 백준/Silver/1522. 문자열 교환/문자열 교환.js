const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const word = input.split("");

let len = word.filter((i) => i === "a").length;

let now = 0;
for (let i = 0; i < len; i++) {
  now += word[i] === "a" ? 1 : 0;
}

let windowab = now;
for (let i = len; i < word.length + len - 1; i++) {
  let w;

  if (i >= word.length) {
    w = word[i - word.length];
  } else {
    w = word[i];
  }
  now += w === "a" ? 1 : 0;

  now -= word[i - len] === "a" ? 1 : 0;

  if (windowab < now) {
    windowab = now;
  }
}

console.log(len - windowab);
