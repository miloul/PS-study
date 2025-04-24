const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

let str = input[0].split("");
const target = input[1].split("");

let stack = [];

for (let i = 0; i < str.length; i++) {
  stack.push(str[i]);
  if (stack[stack.length - 1] === target[target.length - 1]) {
    if (
      stack.slice(stack.length - target.length, stack.length).join("") ===
      target.join("")
    ) {
      for (let i = 0; i < target.length; i++) {
        stack.pop();
      }
    }
  }
}

console.log(stack.length === 0 ? "FRULA" : stack.join(""));
