const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = nm.split(" ").map(Number);

let map = [];
for (let i = 0; i < n; i++) {
  map.push(input[i].split(" ").map(Number));
}

let location = Array.from(new Array(n), () => new Array(m).fill(-1));

let disx = [-1, 1, 0, 0];
let disy = [0, 0, -1, 1];

const dfs = (startx, starty) => {
  let q = [[startx, starty]];

  while (q.length !== 0) {
    const [x, y, dis] = q.shift();
    for (let i = 0; i < 4; i++) {
      let nextx = x + disx[i];
      let nexty = y + disy[i];
      if (
        nextx < n &&
        nextx >= 0 &&
        nexty < m &&
        nexty >= 0 &&
        location[nextx][nexty] === -1
      ) {
        q.push([nextx, nexty, dis + 1]);
        location[nextx][nexty] = location[x][y] + 1;
      }
    }
  }
};

let startx = 0;
let starty = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 2) {
      startx = i;
      starty = j;
      location[i][j] = 0;
    }
    if (map[i][j] === 0) {
      location[i][j] = 0;
    }
  }
}

dfs(startx, starty);
for (let i = 0; i < n; i++) {
  console.log(location[i].join(" "));
}
