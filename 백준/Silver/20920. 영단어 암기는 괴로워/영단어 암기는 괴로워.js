const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const [n, minlong] = arr[0].split(" ").map(Number);

const words = new Map();
for (let i = 1; i <= n; i++) {
  if (arr[i].length >= minlong) words.set(arr[i], (words.get(arr[i]) || 0) + 1);
}

const sortlist = [...words]
  .sort((a, b) => {
    if (b[1] === a[1]) {
      if (b[0].length === a[0].length) return a[0] < b[0] ? -1 : 1;
      return b[0].length - a[0].length;
    }
    return b[1] - a[1];
  })
  .map((el) => el[0])
  .join("\n");

console.log(sortlist);
