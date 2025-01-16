// 등수 구하기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, news, p] = arr[0].split(" ").map(Number);

let rank = -1;

const score = arr[1]?.split(" ").map(Number);

for (let i = 0; i < n; i++) {
  if (score[i] <= news) {
    score.splice(i, 0, news);
    rank = i + 1;
    if (score.length > p && score[p] >= news) {
      rank = -1;
    }
    break;
  } else if (i === n - 1 && n < p) {
    // 랭킹 리스트에 여유있으면
    rank = n + 1;
  }
}

if (n === 0) rank = 1;

console.log(rank);
