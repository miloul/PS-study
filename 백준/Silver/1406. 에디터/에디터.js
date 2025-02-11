const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

let str1 = input[0].split("");
const n = Number(input[1]);

let str2 = [];

for (let i = 0; i < n; i++) {
  let [cmd, k] = input[i + 2].split(" ");

  switch (cmd[0]) {
    case "L":
      if (str1.length === 0) continue;
      str2.push(str1.pop());
      break;
    case "D":
      if (str2.length === 0) continue;
      str1.push(str2.pop());
      break;
    case "B":
      if (str1.length === 0) continue;
      str1.pop();
      break;
    case "P":
      str1.push(k);
      break;
  }
}

const result = [...str1, ...str2.reverse()];

console.log(result.join(""));
