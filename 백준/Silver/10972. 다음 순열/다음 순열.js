const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);

let nowList = input[1].split(" ").map(Number);
let visited = new Array(n + 1).fill(0);
let isLast = -1;

for (let i = nowList.length - 1; i > 0; i--) {
  if (nowList[i] > nowList[i - 1]) {
    // 오름차순이 끊기면
    isLast = i - 1;
    break;
  }
}

const findSwap = (idx) => {
  let min = 10001;
  let minIdx = 0;
  for (let i = idx; i < n; i++) {
    if (nowList[i] > nowList[idx] && nowList[i] < min) {
      min = nowList[i];
      minIdx = i;
    }
  }
  return minIdx;
};

if (isLast === -1) {
  console.log(isLast);
} else {
  let minIdx = findSwap(isLast);
  [nowList[minIdx], nowList[isLast]] = [nowList[isLast], nowList[minIdx]]; // 바꾸고
  // isLast 뒤부터 정렬
  console.log(
    [
      ...nowList.slice(0, isLast + 1),
      ...nowList.slice(isLast + 1).sort((a, b) => a - b),
    ].join(" ")
  );
}
