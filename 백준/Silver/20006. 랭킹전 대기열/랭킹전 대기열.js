const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const [p, m] = input[0].split(" ").map(Number);

let people = [];
for (let i = 1; i <= p; i++) {
  let [l, n] = input[i].split(" ");
  people.push([Number(l), n]);
}

let rooms = [];
for (const [lv, id] of people) {
  let isIn = false;

  for (let i = 0; i < rooms.length; i++) {
    if (rooms[i][1]?.length === m) continue;
    if (rooms[i][0] + 10 >= lv && rooms[i][0] - 10 <= lv) {
      isIn = true;
      rooms[i][1].push([lv, id]);
      break;
    }
  }
  if (!isIn) rooms.push([lv, [[lv, id]]]);
}

for (const r of rooms) {
  if (r[1].length === m) {
    console.log("Started!");
  } else {
    console.log("Waiting!");
  }

  r[1].sort((a, b) => {
    if (a[1] === b[1]) return 0;
    else if (a[1] > b[1]) return 1;
    else return -1;
  });

  for (let i = 0; i < r[1].length; i++) {
    console.log(r[1][i].join(" "));
  }
}
