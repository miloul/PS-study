let fs = require('fs');

const inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
//const inputs = fs.readFileSync(__dirname+'/ex2.txt').toString().split('\n');

const [n, m] = inputs[0].split(' ').map(Number);

let obj = {}
let l1 = [];

for (let i=1; i<=n; i++) {
    let [name, num]= inputs[i].split(' ');
    num = Number(num);
    if (!Boolean(obj[num])) {
        obj[num] = name;
        l1.push(num);
    }
}

let answer = [];

for (let i=0; i<m; i++) {
    const target = Number(inputs[i+n+1])
    let start = result = 0;
    let end = l1.length - 1;

    while (start <= end) {
        let mid = parseInt((start + end) / 2);
        if (target <= l1[mid]) {
            end = mid - 1;
            result = l1[mid]
        }
        else {
            start = mid + 1;
            result = l1[start];
        }
    }
    answer.push(obj[result]);
}

console.log(answer.join('\n'));