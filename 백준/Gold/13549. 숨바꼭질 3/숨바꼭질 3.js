const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, k] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let q = [[n, 0]];

let visited = new Array(100100).fill(0);
visited[n] = 1;
let result = 0;

while (q.length !== 0) {
  const [now, time] = q.shift();

  if (now === k) {
    result = time;
    break;
  }

  for (let next of [now * 2, now - 1, now + 1]) {
    if (next < 0 || next > 100000 || visited[next]) continue;

    if (next === now * 2) {
      q.unshift([next, time]);
    } else {
      q.push([next, time + 1]);
    }
    visited[next] = 1;
  }
}

console.log(result);
