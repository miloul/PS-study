let fs = require('fs');

const inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
//const inputs = fs.readFileSync(__dirname + '/ex2.txt').toString().split('\n');

const [a, p] = inputs[0].split(' ').map(Number)

let d = [a]
let idx = 0
let result = 0

while (true) {
    result = 0
    d[idx].toString().split('').map(Number).forEach(l => result += l**p)
    if (d.includes(result)) {
        break;
    }
    d.push(result)
    idx++
}

d.splice(d.indexOf(result))

console.log(d.length)