let fs = require('fs');

const [n, ...arr] = fs.readFileSync('/dev/stdin').toString().split('\n');
//const [n, ...arr] = fs.readFileSync(__dirname + '/ex2.txt').toString().split('\n');

let l1 = []
let result = 0

for (let i=0; i<+n; i++) {
    if (+arr[i]===0) {
        l1.pop()
    }
    else {
        l1.push(+arr[i])
    }
}

for (const c of l1) {
    result +=c
}
console.log(result)
