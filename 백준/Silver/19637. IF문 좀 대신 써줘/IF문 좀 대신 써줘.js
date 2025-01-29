const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const [n, m] = arr[0].split(" ").map(Number);

let names = [];
let nums = [];
for (let i = 1; i <= n; i++) {
  const [name, num] = arr[i].split(" ");
  names.push(name);
  nums.push(Number(num));
}

let answer = [];
for (let j = 0; j < m; j++) {
  const power = Number(arr[j + n + 1]);
  let start = (result = 0);
  let end = nums.length;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (power <= nums[mid]) {
      end = mid - 1;
      result = names[mid];
    } else {
      start = mid + 1;
      result = names[start];
    }
  }
  answer.push(result);
}

console.log(answer.join("\n"));
