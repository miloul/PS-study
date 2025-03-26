const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = nm.split(" ").map(Number);

let sadari = new Array(101).fill(0);
for (let i = 0; i < n; i++) {
  const [s, e] = arr[i].split(" ").map(Number);
  sadari[s] = e;
}

let snake = new Array(101).fill(0);
for (let i = n; i < n + m; i++) {
  const [s, e] = arr[i].split(" ").map(Number);
  snake[s] = e;
}

let dis = new Array(101).fill(0);
let q = [[1, 0]];
while (q.length !== 0) {
  let [now, cnt] = q.shift();
  if (now === 100) break;
  if (now > 100) continue;

  for (const roll of [1, 2, 3, 4, 5, 6]) {
    let next = now + roll;
    if (sadari[next]) {
      next = sadari[next];
    } else if (snake[next]) {
      next = snake[next];
    }

    if (!dis[next]) {
      q.push([next, cnt + 1]);
      dis[next] = cnt + 1;
    }
  }
}

console.log(dis[100]);
