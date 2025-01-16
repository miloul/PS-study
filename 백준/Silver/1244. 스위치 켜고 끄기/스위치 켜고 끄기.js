// 스위치 켜고 끄기

const { defaultMaxListeners } = require("events");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(arr[0]);
const l1 = arr[1].split(" ").map(Number);
const student = Number(arr[2]);

const getList = (num, l1) => {
  const l2 = [num];
  for (let i = 1; i <= num; i++) {
    if (l1[num - i] === l1[num + i]) {
      l2.push(num - i);
      l2.push(num + i);
    } else {
      break;
    }
  }
  return l2;
};

for (let i = 0; i < student; i++) {
  const [sex, num] = arr[i + 3].split(" ").map(Number);
  if (sex === 1) {
    for (let j = 0; j < n; j++) {
      if ((j + 1) % num === 0) {
        l1[j] = l1[j] === 0 ? 1 : 0;
      }
    }
  } else {
    const dec = getList(num - 1, l1);
    for (const d of dec) {
      l1[d] = l1[d] === 0 ? 1 : 0;
    }
  }
}

let result = [];
while (l1.length > 0) {
  result.push(l1.splice(0, 20).join(" "));
}

console.log(result.join("\n"));
