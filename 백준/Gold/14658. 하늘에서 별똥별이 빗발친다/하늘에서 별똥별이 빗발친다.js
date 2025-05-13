const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, l, k] = input[0].split(" ").map(Number);

let stars = [];
for (let i = 1; i <= k; i++) {
  stars.push(input[i].split(" ").map(Number));
}

let answer = 0;
for (let i = 0; i < k; i++) {
  for (let j = 0; j < k; j++) {
    let cnt = 0;
    let sx = Math.min(stars[i][0], stars[j][0]);
    let sy = Math.min(stars[i][1], stars[j][1]);

    for (const [x, y] of stars) {
      if (sx <= x && x <= sx + l && sy <= y && y <= sy + l) cnt += 1;
    }
    answer = Math.max(answer, cnt);
  }
}

console.log(k - answer);
