const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//let input = fs.readFileSync(__dirname+'/ex2.txt').toString().split("\n");

const n = Number(input[0]);

console.log(n * 4);