const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let s = Number(input[0]);
const visited = Array.from(Array(1001), () => Array(1001).fill(0));

let q = [[1, 0, 0]];
visited[1][0] = 1;
while (q.length != 0) {
  let [cnt, time, copy] = q.shift();
  if (cnt === s) {
    console.log(time);
    break;
  }
  for (let i = 0; i < 3; i++) {
    let tmp = copy;
    let next = cnt;
    if (i == 1) {
      // copy
      tmp = cnt;
    } else {
      if (i == 0 && copy !== 0) {
        // paste
        next += copy;
      } else if (i == 2) {
        next -= 1;
      }
    }
    if (next < 0 || next > 1000 || visited[next][tmp]) continue;
    q.push([next, time + 1, tmp]);
    visited[next][tmp] = time + 1;
  }
}
