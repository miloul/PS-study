// 쿠키의 신체 측정

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const n = Number(arr[0]);
let leftarm = (rightarm = waist = leftleg = rightleg = 0);
const heart = [];

const iswhat = (i, j, hi, hj) => {
  result = "";
  if (i === hi) {
    result = j < hj ? "leftarm" : j !== hj ? "rightarm" : "";
  } else if (i > hi) {
    result = j === hj ? "waist" : j < hj ? "leftleg" : "rightleg";
  }
  return result;
};

for (let i = 0; i < n; i++) {
  const l1 = arr[i + 1].split("");
  for (let j = 0; j < l1.length; j++) {
    if (l1[j] === "*") {
      if (heart.length === 0) {
        heart.push([i + 2, j + 1]);
      } else {
        switch (iswhat(i, j, heart[0][0] - 1, heart[0][1] - 1)) {
          case "leftarm":
            leftarm++;
            break;
          case "rightarm":
            rightarm++;
            break;
          case "waist":
            waist++;
            break;
          case "leftleg":
            leftleg++;
            break;
          case "rightleg":
            rightleg++;
            break;
          default:
            break;
        }
      }
    }
  }
}

console.log(heart[0].join(" "));
console.log(leftarm, rightarm, waist, leftleg, rightleg);
