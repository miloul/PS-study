// 어두운 굴다리

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(arr[0]);
const m = Number(arr[1]);
const garo = arr[2].split(" ").map(Number);

let start = 1;
let end = n;

h = n;

const isPossible = (mid) => {
  // 처음위치 - 0 < mid
  if (garo[0] > mid) return false;
  // 가로등1 - 가로등2 < mid * 2
  for (let i = 1; i < m; i++) {
    if (garo[i] - garo[i - 1] > mid * 2) return false;
  }
  // 길의 길이 - 마지막가로등 < mid
  if (n - garo[m - 1] > mid) return false;
  return true;
};

while (start <= end) {
  mid = Math.floor((start + end) / 2);

  if (isPossible(mid)) {
    h = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(h);
