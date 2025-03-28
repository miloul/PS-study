const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nk, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = nk.split(" ").map(Number);
let conv = arr[0].split(" ").map(Number);

let robot = new Array(n * 2).fill(0);
let cnt = 0;

while (1) {
  if (conv.filter((v) => v === 0).length >= k) break;

  cnt++;

  conv.unshift(conv.pop());
  robot.pop();
  robot.unshift(0);
  if (robot[n - 1] === 1) robot[n - 1] = 0;

  // 다음 칸 내구도 0 아니면 로봇 옮기기
  for (let i = 2 * n - 2; i >= 0; i--) {
    let next = i + 1;

    if (!robot[i]) continue;

    // 다음 칸의 내구도가 0이 아니고 현재 칸에 로봇이 있으며 다음칸에 로봇이 없으면
    if (robot[next] === 0 && conv[next] > 0) {
      robot[i] = 0;
      robot[next] = 1;
      conv[next]--;
    }

    if (robot[n - 1] === 1) robot[n - 1] = 0;
  }

  // 로봇 올릴 수 있으면 올리기
  if (conv[0] > 0 && robot[0] === 0) {
    robot[0] = 1;
    conv[0]--;
  }
}

console.log(cnt);
