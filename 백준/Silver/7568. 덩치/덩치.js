let fs = require('fs');

const inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
//const inputs = fs.readFileSync(__dirname + '/ex.txt').toString().split('\n');

const n = Number(inputs[0])
let l1 = []

for (let i=0; i<n; i++) {
    let [x, y] = inputs[i+1].split(' ').map(Number)
    l1.push([x, y])
}

let score = new Array(l1.length).fill(1)

for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++){
        if (l1[i][0]<l1[j][0]) {
            if (l1[i][1]<l1[j][1]) {
                score[i]+=1
            }
        }
    }
}

console.log(score.join(' '))
