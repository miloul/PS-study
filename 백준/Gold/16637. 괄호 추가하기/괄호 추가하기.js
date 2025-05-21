const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const expr = input[1];

let maxResult = -Infinity;

const calc = (num1, op, num2) => {
  if (op === "+") return num1 + num2;
  else if (op === "-") return num1 - num2;
  else return num1 * num2;
};

const dfs = (index, current) => {
  if (index >= n) {
    maxResult = Math.max(maxResult, current);
    return;
  }

  let m = expr[index - 1];
  let nextNum = +expr[index];
  // 괄호 없이 계산
  dfs(index + 2, calc(current, m, nextNum));

  // 괄호 추가해서 계산
  if (index + 2 < n) {
    let b = +expr[index + 2];
    let m2 = expr[index + 1];
    const bracketResult = calc(nextNum, m2, b);

    dfs(index + 4, calc(current, m, bracketResult));
  }
};

dfs(2, +expr[0]);
console.log(maxResult);
