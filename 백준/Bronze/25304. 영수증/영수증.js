const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//let input = fs.readFileSync(__dirname+'/example.txt').toString().split("\n");

let total = Number(input[0]);
let cnt = Number(input[1]);
let sum = 0;

for(let i=2; i<=cnt+1; ++i){
    let newArr = input[i].split(" ").map(item=>Number(item));
    sum += newArr[0] * newArr[1];
}

if (total === sum) {
    result = 'Yes';
}
else {
    result = 'No';
}

console.log(result);