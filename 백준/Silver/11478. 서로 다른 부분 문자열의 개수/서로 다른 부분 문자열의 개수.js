let fs = require('fs');

const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//const inputs = fs.readFileSync(__dirname+'/ex2.txt').toString().split('\n');

const input = inputs[0];
let input_set = new Set();

for (let i=0; i<input.length; i++) {
    for (let j=i; j<input.length; j++){
        input_set.add(input.substring(i, j+1));
    }
}

console.log(input_set.size);