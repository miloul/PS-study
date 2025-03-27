const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [t, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

t = +t;

const getResult = (w, k) => {
  let map = new Map();
  for (let j = 0; j < w.length; j++) {
    if (map.has(w[j])) {
      let arr = [...map.get(w[j]), j];
      map.set(w[j], arr);
    } else {
      map.set(w[j], [j]);
    }
  }

  let words = [];
  for (const [key, e] of map) {
    if (e.length >= k) {
      for (let l = 0; l < e.length - k + 1; l++) {
        let len = Math.abs(e[l] - e[l + k - 1]) + 1;
        words.push(len);
      }
    }
  }
  words.sort((a, b) => a - b);
  if (words.length === 0) console.log(-1);
  else console.log(words[0], words[words.length - 1]);
};

for (let i = 0; i < t * 2; i += 2) {
  let w = inputs[i].split("");
  const k = Number(inputs[i + 1]);

  getResult(w, k);
}
