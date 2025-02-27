// 이분 그래프
// 사이클 여부, 자식 2개
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let t = Number(input[0]);

let b = 1;
while (t) {
  let [v, e] = input[b].split(" ").map(Number);
  let graph = Array.from(new Array(v + 1), () => new Array());

  let result = true;
  for (let i = 1; i <= e; i++) {
    const [x, y] = input[i + b].split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }

  // 사이클 판별..
  // 색칠한 인접노드 중 같은 색 노드가 있으면 이분그래프xxxx
  let color = new Array(v + 1).fill(0);

  const bfs = (i) => {
    let q = [i];
    color[i] = 1;

    while (q.length) {
      let node = q.shift();
      let nowColor = color[node];
      for (const no of graph[node]) {
        if (color[no] !== 0) {
          if (color[no] === nowColor) {
            result = false;
            return;
          } else continue;
        }
        q.push(no);
        color[no] = nowColor * -1;
      }
    }
  };

  for (let i = 1; i <= v; i++) {
    if (color[i] === 0) bfs(i);
  }

  console.log(result ? "YES" : "NO");
  b += e + 1;
  t--;
}
