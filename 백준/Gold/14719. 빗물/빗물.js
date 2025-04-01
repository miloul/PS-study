const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [hw, arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [h, w] = hw.split(" ").map(Number);
arr = arr.split(" ").map(Number);

let result = 0;
for (let i = 1; i < w; i++) {
  let maxleft = Math.max(...arr.slice(0, i));
  let maxright = Math.max(...arr.slice(i + 1));
  let sero = Math.min(maxleft, maxright);
  if (arr[i] < sero) {
    result += sero - arr[i];
  }
}

console.log(result);
