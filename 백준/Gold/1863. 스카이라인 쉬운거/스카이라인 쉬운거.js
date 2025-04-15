const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

n = +n;

let stack = [];
let cnt = 0;

// 높이가 줄어들때마다 pop() 하면서 count 올려줌 -> stack의 맨 위의 값이 햔재 값보다 작을때까지
// 현재 높이가 0보다 크고, stack이 비어있거나, stack의 맨 위의 값보다 현재 값이 클 때 push()
// 배열을 다 돌았는데 stack에 값이 남아있다면 남아있는 만큼 count 늘려줌
// 높이가 같다면 같은 건물일 수도 있기 때문에 push 안함

for (let i = 0; i < n; i++) {
  let [garo, sero] = arr[i].split(" ").map(Number);
  while (stack[stack.length - 1] > sero) {
    stack.pop();
    cnt++;
  }
  if (stack[stack.length - 1] < sero || stack.length === 0) {
    stack.push(sero);
  }
}

while (stack.length) {
  if (stack.pop() !== 0) cnt++;
}

console.log(cnt);
