const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let result = []
// 백트래킹..
const dfs = (depth, nums) => {
    if (depth === m) {
        result.push(nums.join(" "));
        return;
    }
    for (let i=0; i<n; i++) {
        nums.push(i+1)
        dfs(depth+1, nums);
        nums.pop();
    }
}

dfs(0, []);
console.log(result.join("\n"));