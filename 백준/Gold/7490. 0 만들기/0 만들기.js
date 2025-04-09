const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

let t = Number(arr[0]);
let result;

const doing = (i, n, l1) => {
  let array = [...l1];
  array.push(i);
  if (i === n) {
    let sum = eval(array.join("").split(" ").join(""));
    if (sum === 0) result.push(array.join(""));
    return;
  }
  array.push(" ");
  doing(i + 1, n, array);
  array.pop();
  array.push("+");
  doing(i + 1, n, array);
  array.pop();
  array.push("-");
  doing(i + 1, n, array);
  array.pop();
};

for (let i = 1; i <= t; i++) {
  let n = Number(arr[i]);
  result = [];
  doing(1, n, []);

  console.log(result.join("\n"));
  if (i != t) console.log();
}
