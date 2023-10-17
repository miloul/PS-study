let fs = require('fs');

const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//const inputs = fs.readFileSync(__dirname+'/ex2.txt').toString().split('\n');
let result = '';


for (let i=0; i<inputs.length; i++) {
    let n = Number(inputs[i]);
    let cnt = 0;

    if (n === 0 ) break;

    for (let j = n + 1; j <= n*2; j++) {
        let isPrime = true;
        for (let k = 2; k <= Math.sqrt(j); k++) {
            if (j % k === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) cnt++;
    }
    result += cnt + "\n";
}

console.log(result)