const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, s] = input[0].split(" ").map(Number);
let l1 = input[1].split(" ").map(Number);

let cnt = 0;
// 백트래킹..
const dfs = (depth, sum) => {
    if (sum === s && depth!=0) {
        cnt++;
    }
    if (depth === n) return;
    for (let i=depth; i<n; i++) {
        sum+=l1[i];
        dfs(i+1, sum);
        sum-=l1[i];
    }
}

dfs(0, 0);
console.log(cnt);