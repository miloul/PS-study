const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let visited = new Array(n+1).fill(0);

let result = []
// 백트래킹..
const dfs = (depth, nums) => {
    if (depth === m) {
        result.push(nums.join(" "))
        return;
    }
    for (let i=0; i<n; i++) {
        if (visited[i]==0) { // 방문안했으면
            nums.push(i+1)
            dfs(depth+1, nums);
            nums.pop();
            visited[i]=0;
        }
    }
}

dfs(0, []);
console.log(result.join("\n"));