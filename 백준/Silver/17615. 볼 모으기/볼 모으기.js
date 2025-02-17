const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ball] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

n = Number(n);
ball = ball.split("");

let moveblue = (movered = 0);
let bcnt = (rcnt = 0);
let before = ball[0];
for (let i = 0; i < ball.length; i++) {
  if (ball[i] === "B") {
    bcnt++;
  } else {
    rcnt++;
  }

  if (ball[i] !== before) {
    if (before === "B") {
      moveblue += bcnt;
      bcnt = 0;
    } else {
      movered += rcnt;
      rcnt = 0;
    }
  }
  before = ball[i];
}
let min = Math.min(moveblue, movered);

moveblue = movered = 0;
bcnt = rcnt = 0;
before = ball[ball.length - 1];
for (let i = ball.length - 1; i >= 0; i--) {
  if (ball[i] === "B") {
    bcnt++;
  } else {
    rcnt++;
  }

  if (ball[i] !== before) {
    if (before === "B") {
      moveblue += bcnt;
      bcnt = 0;
    } else {
      movered += rcnt;
      rcnt = 0;
    }
  }
  before = ball[i];
}

console.log(Math.min(moveblue, movered, min));
