let fs = require('fs');

const inputs = fs.readFileSync('/dev/stdin').toString().split('-');
//const inputs = fs.readFileSync(__dirname + '/ex2.txt').toString().split('-');
let result = 0;

for (let i = 0; i < inputs.length; i++) {
    let tmp = 0;
    let l1 = inputs[i].split('+').map(Number);
    for (const n of l1) {
        tmp += n;
    }
    if (i > 0) {
        result -= tmp;
    } else {
        result += tmp;
    }
}

console.log(result)