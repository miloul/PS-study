const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let [r, c, dir] = input[1].split(" ").map(Number);

const board = input.slice(2, 2 + n).map((line) => line.split(" ").map(Number));

const dr = [-1, 0, 1, 0]; // 북, 동, 남, 서
const dc = [0, 1, 0, -1];
const CLEAN = 2;
let cnt = 0;

while (true) {
  if (board[r][c] === 0) {
    // 청소
    board[r][c] = CLEAN;
    cnt++;
  }

  let FOUND = false;
  for (let i = 0; i < 4; i++) {
    dir = (dir + 3) % 4; // 90도 회전
    let nr = r + dr[dir];
    let nc = c + dc[dir];

    if (nr >= 0 && nr < n && nc >= 0 && nc < m && board[nr][nc] === 0) {
      // 전진
      r = nr;
      c = nc;
      FOUND = true;
      break;
    }
  }
  if (FOUND) continue;

  // 청소할 곳 없으면 후진
  let backDir = (dir + 2) % 4;
  let br = r + dr[backDir];
  let bc = c + dc[backDir];

  if (br >= 0 && br < n && bc >= 0 && bc < m && board[br][bc] != 1) {
    // 뒤가 벽이 아니면 후진(방향 유지)
    r = br;
    c = bc;
    continue;
  } else break;
}

console.log(cnt);
