const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nk] = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, k] = nk.split(" ").map(Number);

let answer = 0;
let digit = 1;
let nine = 9;

while (k > nine * digit) {
  k -= digit * nine;
  answer += nine;

  nine = nine * 10;
  digit++;
}

answer = answer + 1 + ~~((k - 1) / digit);

if (answer > n) console.log(-1);
else console.log(answer.toString()[(k - 1) % digit]);
