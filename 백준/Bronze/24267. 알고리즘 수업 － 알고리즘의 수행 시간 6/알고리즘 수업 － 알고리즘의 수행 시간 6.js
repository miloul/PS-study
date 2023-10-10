const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//let input = fs.readFileSync(__dirname+'/ex2.txt').toString().split("\n");

let n = Number(input[0]);

let result = ((BigInt(n-2)*BigInt(n-1)*BigInt(n))/BigInt(6));
console.log(`${result}\n${3}`);