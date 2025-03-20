const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
let mycard = input[1].split(" ").map(Number);
const m = Number(input[2]);
const card = input[3].split(" ").map(Number);

let map = new Map();
for (let i = 0; i < n; i++) {
  map.set(mycard[i], (map.get(mycard[i]) | 0) + 1);
}

let result = [];
for (let i = 0; i < m; i++) {
  result.push(map.get(card[i]) | 0);
}
console.log(result.join(" "));
