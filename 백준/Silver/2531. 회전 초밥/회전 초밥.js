const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, d, k, c] = input[0].split(" ").map(Number);

let sushi = [];
for (let i = 1; i <= n; i++) {
  let s = Number(input[i]);
  sushi.push(s);
}

let max = 0;
for (let i = 0; i < n; i++) {
  let map = new Map();
  let cnt = 0;
  let l1 = [];
  for (let j = i; j < i + k; j++) {
    let s;
    if (j >= n) {
      s = sushi[j - n];
    } else {
      s = sushi[j];
    }

    if (!map.get(s)) {
      map.set(s, 1);
      cnt++;
    }
  }
  if (!map.get(c)) cnt += 1;
  if (cnt > max) max = cnt;
}
console.log(max);
