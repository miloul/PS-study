const { ChildProcess } = require('child_process');
let fs = require('fs');

const inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
//const inputs = fs.readFileSync(__dirname+'/ex2.txt').toString().split('\n');

let t = Number(inputs[0])

let i = 1;
while (t) {
    let n = Number(inputs[i++]);
    const l1 = [];
    for (let j=0; j<n; j++) {
        l1[j] = inputs[i++].split(' ').map(Number);
    }
    l1.sort((a, b) => a[0] - b[0]);
    
    let k = l1[0][1];
    let cnt = 1;
    for (let j=1; j<n; j++) {
        if (l1[j][1] < k ) {
            cnt++
            k = l1[j][1];
        }
    }
    console.log(cnt);
    t--;
}
