// 올림픽

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const aeiou = ["a", "e", "i", "o", "u"];

const isaeiou = (string) => {
  for (let i = 0; i < aeiou.length; i++) {
    if (string.includes(aeiou[i])) {
      return true;
    }
  }
  return false;
};

const two = (string) => {
  if (string.length < 2) {
    return true;
  }

  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i - 1] && string[i] !== "e" && string[i] !== "o")
      return false;
  }
  return true;
};

const three = (string) => {
  if (string.length < 3) {
    return true;
  }

  let mcnt = (jcnt = 0);
  for (let i = 0; i < string.length; i++) {
    if (aeiou.includes(string[i])) {
      mcnt++;
      jcnt = 0;
    } else {
      jcnt++;
      mcnt = 0;
    }
    if (jcnt >= 3 || mcnt >= 3) {
      return false;
    }
  }

  return true;
};

for (let i = 0; i < arr.length; i++) {
  const string = arr[i];
  if (string === "end") {
    break;
  }

  const acceptable = isaeiou(string) && two(string) && three(string);

  if (acceptable) {
    console.log(`<${string}> is acceptable.`);
  } else {
    console.log(`<${string}> is not acceptable.`);
  }
}
