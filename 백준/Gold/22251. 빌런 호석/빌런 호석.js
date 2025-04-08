const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, k, p, x] = arr[0].split(" ").map(Number);

const disp = [
  [1, 1, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1],
  [0, 1, 1, 1, 0, 1, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 1, 0],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1],
];

let diff = Array.from(new Array(10), () => new Array(10).fill(0));
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i == j) continue;
    else if (diff[i][j] !== 0) continue;

    let cnt = 0;
    for (let l = 0; l < 7; l++) {
      if (disp[i][l] !== disp[j][l]) cnt++;
    }
    diff[i][j] = cnt;
    diff[j][i] = cnt;
  }
}

let answer = 0;
for (let i = 1; i <= n; i++) {
  let cost = 0;
  let [a, b] = [x, i];
  if (a === b) continue;
  for (let j = 0; j < k; j++) {
    cost += diff[a % 10][b % 10];

    a = Math.floor(a / 10);
    b = Math.floor(b / 10);
  }

  if (cost <= p) {
    answer++;
  }
}

console.log(answer); // 자기자신 빼기
