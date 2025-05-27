const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);

let ining = [];
for (let i = 1; i <= n; i++) {
  ining.push(input[i].split(" ").map(Number));
}

let visted = new Array(9).fill(0);
let result = -Infinity;

const setPlayer = (player) => {
  if (player.length === 3) setPlayer([...player, 0]);
  else if (player.length === 9) play(player);
  else {
    for (let i = 1; i < 9; i++) {
      if (!visted[i]) {
        visted[i] = 1;
        setPlayer([...player, i]);
        visted[i] = 0;
      }
    }
  }
};

const play = (player) => {
  let score = 0;
  let order = 0;

  for (let i = 0; i < n; i++) {
    let now = ining[i];
    let outCnt = 0;
    let base1 = 0;
    let base2 = 0;
    let base3 = 0;

    while (outCnt < 3) {
      let tmp = now[player[order++ % 9]];
      switch (tmp) {
        case 1:
          score += base3;
          base3 = base2;
          base2 = base1;
          base1 = 1;
          break;
        case 2:
          score += base3 + base2;
          base3 = base1;
          base2 = 1;
          base1 = 0;
          break;
        case 3:
          score += base1 + base2 + base3;
          base3 = 1;
          base1 = base2 = 0;
          break;
        case 4:
          score += base1 + base2 + base3 + 1;
          base1 = base2 = base3 = 0;
          break;
        default:
          outCnt++;
      }
    }
  }
  result = Math.max(result, score);
};

setPlayer([]);

console.log(result);
