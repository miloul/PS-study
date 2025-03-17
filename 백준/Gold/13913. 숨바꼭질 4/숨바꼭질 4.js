const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);

let q = [[n, 0]];
let visited = new Array(100001).fill(0);
visited[n] = 0;

let result = new Array(100001).fill(0);
result[n] = 1;
while (q.length != 0) {
  let [now, time] = q.shift();

  if (now === k) break;
  for (const m of [now * 2, now + 1, now - 1]) {
    if (now > 100001 || now < 0 || visited[m]) continue;
    q.push([m, time + 1]);
    visited[m] = time + 1;
    result[m] = now;
  }
}

let path = [k];
let prev = result[k];
for (let i = 0; i < visited[k]; i++) {
  path.push(prev);
  prev = result[prev];
}

console.log(visited[k]);
console.log(path.reverse().join(" "));
