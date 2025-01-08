const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const word = fs.readFileSync(filePath).toString().trim().split("\n");

const splitword = word.join().toUpperCase().split("");
const set = new Set(splitword);

let l1 = [];
for (const s of set) {
  const tmp = splitword.filter((w) => w == s).length;
  l1.push(tmp);
}

const max = Math.max(...l1);

if (l1.filter((k) => k === max).length > 1) {
  console.log("?");
} else {
  console.log([...set][l1.indexOf(max)]);
}
