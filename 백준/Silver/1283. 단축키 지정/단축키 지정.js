const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...strs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

n = Number(n);
let keyset = new Set();
let result = [];

for (let i = 0; i < strs.length; i++) {
  let ss = strs[i].split(" ");
  let found = false;

  // 첫번째글자만
  for (let j = 0; j < ss.length; j++) {
    let word = ss[j];
    let key = word[0].toLocaleLowerCase();
    if (!keyset.has(key)) {
      keyset.add(key);
      ss[j] = `[${word[0]}]` + word.slice(1);
      result.push(ss.join(" "));
      found = true;
      break;
    }
  }

  // 첫번째에서 못찾으면
  if (!found) {
    for (let j = 0; j < ss.length; j++) {
      let s = ss[j];
      for (let k = 0; k < s.length; k++) {
        let key = s[k].toLocaleLowerCase();
        if (!keyset.has(key)) {
          keyset.add(key);
          ss[j] = s.slice(0, k) + `[${s[k]}]` + s.slice(k + 1);
          result.push(ss.join(" "));
          found = true;
          break;
        }
      }
      if (found) break;
    }
  }

  if (!found) result.push(ss.join(" "));
}

console.log(result.join("\n"));
