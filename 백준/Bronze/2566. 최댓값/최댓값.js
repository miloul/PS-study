let fs = require('fs');

const numbers = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//const numbers = fs.readFileSync(__dirname+'/ex2.txt').toString().trim().split('\n');

let input = [];
for (const k of numbers){
    input.push(k.split(' ').map(Number));
}

let max = 0;
let row = 1, col = 1;

for (let i=0; i< 9; i++) {
    for (let j=0; j<9; j++) {
        if (input[i][j] > max) {
            max = input[i][j];
            row = i+1;
            col = j+1;
        }
    }
}

console.log(max);
console.log(row, col);