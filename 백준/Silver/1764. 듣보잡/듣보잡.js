let fs = require('fs');

const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//const inputs = fs.readFileSync(__dirname+'/ex2.txt').toString().split('\n');

const nm = inputs[0].split(' ');
const n = Number(nm[0]);
const m = Number(nm[1]);

const nSet = new Set();
const mSet = new Set();

for (let i=1; i<inputs.length; i++) {
    if (i < n+1) {
        nSet.add(inputs[i]);
    }
    else {
        mSet.add(inputs[i]);
    }
}

const r = [...nSet].filter(item => mSet.has(item)).sort();

console.log(r.length);
console.log(r.join('\n'));