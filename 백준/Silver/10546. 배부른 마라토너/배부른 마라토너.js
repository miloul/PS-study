let fs = require('fs');

const inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
//const inputs = fs.readFileSync(__dirname + '/ex.txt').toString().split('\n');

const n = Number(inputs.shift())
let h1 = new Map()
let cnt = 0

for (let name of inputs) {
    name = name.trim()
    if (cnt < n) {
        if (h1.has(name)) {
            h1.set(name, h1.get(name) + 1)
        }
        else {
            h1.set(name, 1)
        }
        cnt++;
    }
    else {
        if (h1.has(name) && h1.get(name) === 1) {
            h1.delete(name)
        }
        else {
            h1.set(name, h1.get(name) - 1)
        }
    }
}

for (let name of h1.keys()) {
    console.log(name)
}