const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
let l1 = input[1].split(" ").map(Number);
let result = [];
let near = new Array(n + 1).fill(0);
let cnt = new Array(n + 1).fill(0);

let stackleft = [];
let stackright = [];
for (let j = n - 1; j >= 0; j--) {
  while (stackleft.length && l1[stackleft[stackleft.length - 1]] <= l1[j])
    stackleft.pop();
  cnt[j] += stackleft.length;
  if (stackleft.length) {
    near[j] = stackleft[stackleft.length - 1];
  }
  stackleft.push(j);
}
for (let j = 0; j < n; j++) {
  while (stackright.length && l1[stackright[stackright.length - 1]] <= l1[j])
    stackright.pop();
  cnt[j] += stackright.length;
  if (stackright.length) {
    if (near[j] == 0) near[j] = stackright[stackright.length - 1];
    else if (
      Math.abs(j - near[j]) >= Math.abs(j - stackright[stackright.length - 1])
    ) {
      near[j] = stackright[stackright.length - 1];
    }
  }
  stackright.push(j);
}

for (let i = 0; i < n; i++) {
  if (cnt[i] === 0) result.push(0);
  else result.push([cnt[i], near[i] + 1].join(" "));
}
console.log(result.join("\n"));
