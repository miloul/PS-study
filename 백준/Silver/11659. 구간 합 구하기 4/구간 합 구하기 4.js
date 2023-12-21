let fs = require('fs');

const inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
//const inputs = fs.readFileSync(__dirname + '/ex.txt').toString().split('\n');

const [n,m] = inputs[0].split(' ').map(Number)

let l1 = inputs[1].split(' ').map(Number)
let sum = new Array(l1.length+1).fill(0)
let result = []

l1.forEach((v,i) => {
    sum[i+1] = sum[i] + v
})

for (let i=0; i<m; i++) {
    let [idx1, idx2] = inputs[i+2].split(' ').map(Number)
    result.push(sum[idx2] - sum[idx1-1])    
}

console.log(result.join('\n'))