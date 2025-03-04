const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);

let nowList = input[1].split(" ").map(Number);
let isLast = -1;

for (let i = nowList.length - 1; i > 0; i--) {
  if (nowList[i] < nowList[i - 1]) {
    // 내림차순이 끊기면
    isLast = i - 1;
    break;
  }
}

const findSwap = (idx) => {
  let max = 0;
  let maxIdx = 0;
  for (let i = idx; i < n; i++) {
    if (nowList[i] < nowList[idx] && nowList[i] > max) {
      max = nowList[i];
      maxIdx = i;
    }
  }
  return maxIdx;
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
      ...nowList.slice(isLast + 1).sort((a, b) => b - a),
    ].join(" ")
  );
}
