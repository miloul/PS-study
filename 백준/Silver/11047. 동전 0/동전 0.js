const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(coins, target) {
    let cnt = 0
    for (const coin of coins) {
        if (target >= coin) {
            cnt += Math.floor(target/coin)
            target = target % coin
        }
    }
    return cnt
}

let [n, k] = inputs.shift().split(' ').map(Number)
let list = inputs.reverse().map(Number)
console.log(solution(list, k))