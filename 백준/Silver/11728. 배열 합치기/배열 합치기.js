const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = nm.split(" ").map(Number);

let l1 = input[0].split(" ").map(Number);
let l2 = input[1].split(" ").map(Number);

let sortlist = [...l1, ...l2].sort((a, b) => a - b);

console.log(sortlist.join(" "));
