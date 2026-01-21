const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);

let graph = [];
for (let i = 0; i < n; i++) {
  graph.push(input[i + 1].trim().split(""));
}

let garo = 0;
// 가로
for (let i = 0; i < n; i++) {
  space = 0;
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === ".") {
      space++;
      if (space == 2) garo++;
    } else space = 0;
  }
}

let sero = 0;
// 세로
for (let i = 0; i < n; i++) {
  space = 0;
  for (let j = 0; j < n; j++) {
    if (graph[j][i] === ".") {
      space++;
      if (space == 2) sero++;
    } else space = 0;
  }
}

console.log(garo, sero);
