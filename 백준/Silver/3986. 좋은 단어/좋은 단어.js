let fs = require('fs');

const [n, ...arr] = fs.readFileSync('/dev/stdin').toString().split('\n');
//const [n, ...arr] = fs.readFileSync(__dirname + '/ex2.txt').toString().split('\n');

let N = +n;
let cnt = 0;

for (let i = 0; i < N; i++) {
    let l1 = [];
    let string = arr[i].split('\r');
    string = string[0].split('')
    for (const s of string) {
        if (l1[l1.length - 1] === s) {
            l1.pop();
        } else {
            l1.push(s);
        }
    }
    if (l1.length === 0) {
        cnt++;
    }
}

console.log(cnt);