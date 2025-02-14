const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let distance = new Array(m + 1).fill(0).map((_, idx) => idx);

let l1 = new Map();
for (let i = 1; i <= n; i++) {
  const [start, end, value] = input[i].split(" ").map(Number);
  if (!l1.has(start)) l1.set(start, [[end, value]]);
  else l1.set(start, [...l1.get(start), [end, value]]);
}

for (let i = 0; i <= m; i++) {
  // 0이 아닌 경우에 [i-1] + 1 vs i
  if (i) distance[i] = Math.min(distance[i - 1] + 1, distance[i]);

  if (l1.has(i)) {
    for (const [end, value] of l1.get(i)) {
      if (end > m) continue;
      distance[end] = Math.min(distance[i] + value, distance[end]);
    }
  }
}

console.log(distance[m]);
