const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs.readFileSync(filePath).toString().trim().split("\n");

for (const i of arr) {
  const tri = i.split(" ").map(Number);
  const [a, b, c] = tri;

  const result =
    a === b && b === c && a === c ? 3 : a !== b && b !== c && a !== c ? 0 : 2;

  if (result === 3 && tri[0] === 0) {
    break;
  }
  tri.sort((a, b) => a - b);

  if (tri[2] >= tri[0] + tri[1]) {
    console.log("Invalid");
  } else if (result === 3) {
    console.log("Equilateral");
  } else if (!result) {
    console.log("Scalene");
  } else {
    console.log("Isosceles");
  }
}
