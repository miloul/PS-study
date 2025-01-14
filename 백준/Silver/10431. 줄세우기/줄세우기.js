// 줄세우기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(arr[0]);

for (let i = 1; i <= n; i++) {
  let l1 = arr[i].split(" ").map(Number);
  const tnum = Number(l1[0]);
  let cnt = 0;
  for (let j = 2; j < l1.length; j++) {
    for (let k = 1; k < j; k++) {
      if (l1[k] > l1[j]) {
        cnt = cnt + j - k;
        const tmp = l1[j];
        l1.splice(j, 1);
        l1.splice(k, 0, tmp);

        break;
      }
    }
  }
  console.log(tnum, cnt);
}
