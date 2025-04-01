const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, arr] = fs.readFileSync(filePath).toString().trim().split("\n");

n = +n;
arr = arr.split(" ").map(Number);

let result = new Array(n).fill(0);
let stack = [[arr[0], 1]];
result[0] = 0;
for (let i = 1; i < n; i++) {
  while (stack.length) {
    const [s, idx] = stack.pop();
    if (s > arr[i]) {
      result[i] = idx;
      stack.push([s, idx]);
      stack.push([arr[i], i + 1]);
      break;
    }
  }
  if (!stack.length) stack.push([arr[i], i + 1]);
}

console.log(result.join(" "));
