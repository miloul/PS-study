let fs = require("fs");

const arr = fs.readFileSync('/dev/stdin').toString().split('\n');
/*const arr = fs
  .readFileSync(__dirname + "/ex.txt")
  .toString()
  .trim()
  .split("\n");*/

const [n, q] = arr.shift().split(" ").map(Number);
const l1 = arr
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let sum = new Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
  sum[i] = sum[i - 1] + l1[i - 1];
}

let result = [];
for (let i = 0; i < q; i++) {
  const [l, r] = arr[i].split(" ").map(Number);
  result.push(sum[r] - sum[l - 1]);
}

console.log(result.join("\n"));
