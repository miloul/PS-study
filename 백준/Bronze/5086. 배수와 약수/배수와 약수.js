const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//let input = fs.readFileSync(__dirname+'/ex2.txt').toString().split("\n");

for (const i of input) {
    let [n, m] = i.split(' ').map(item=>Number(item));

    if (n === 0 && m === 0){
        break;
    }

    if (m % n === 0) {
        console.log("factor");
    }
    else if (n % m === 0) {
        console.log("multiple");
    }
    else {
        console.log("neither")
    }
}