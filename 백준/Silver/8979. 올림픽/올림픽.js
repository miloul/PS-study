// 올림픽

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = arr[0].split(" ").map(Number);

let m = [];
for (let i = 1; i <= n; i++) {
  let l1 = arr[i].split(" ").map(Number);
  m.push(l1);
}

m.sort((a, b) => {
  if (a[1] !== b[1]) {
    return b[1] - a[1];
  }
  if (a[2] !== b[2]) {
    return b[2] - a[2];
  }
  return b[3] - a[3];
});

let rank = 1;

if (m[0][0] === k) {
  console.log(rank);
} else {
  for (let i = 1; i < n; i++) {
    const [prev, pg, ps, pc] = m[i - 1];
    const [cur, cg, cs, cc] = m[i];

    if (pg > cg) rank = i + 1;
    else if (ps > cs) rank = i + 1;
    else if (pc > cc) rank = i + 1;

    if (cur === k) {
      console.log(rank);
      break;
    }
  }
}
