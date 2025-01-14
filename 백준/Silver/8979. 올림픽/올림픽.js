// 올림픽

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = arr[0].split(" ").map(Number);

let m = new Array(n + 1).fill([]);
for (let i = 1; i <= n; i++) {
  let l1 = arr[i].split(" ").map(Number);
  m[l1[0]] = [l1[1], l1[2], l1[3]];
}

let rank = new Array(n + 1).fill(0);

const compare = (a, b) => {
  return a < b ? 1 : 0;
};

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    const gold = compare(m[i][0], m[j][0]);
    const silver = compare(m[i][1], m[j][1]);
    const cu = compare(m[i][2], m[j][2]);
    if (gold) {
      rank[i]++;
    }
    if (silver && !gold) {
      rank[i]++;
    }
    if (cu && !silver && !gold) {
      rank[i]++;
    }
  }
}

console.log(rank[k]);
