let fs = require("fs");

const [n, ...arr] = fs.readFileSync('/dev/stdin').toString().split('\n');
//const [n, ...arr] = fs
  //.readFileSync(__dirname + "/ex.txt")
  //.toString()
  //.split("\n");

let list = arr[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let result = 0;

for (let i = 0; i < +n; i++) {
  let start = i;
  let end = +n - 1;
  while (start <= end) {
    let mid = ~~((start + end) / 2);
    if (list[i] >= list[mid] * 0.9) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  result += start - i - 1;
}

console.log(result);
