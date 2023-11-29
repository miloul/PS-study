let fs = require('fs');

const [n, l1, m, l2] = fs.readFileSync('/dev/stdin').toString().split('\n');
//const [n, l1, m, l2] = fs.readFileSync(__dirname + '/ex2.txt').toString().split('\n');

let result = []
const l1s = l1.split(' ').map(Number).sort((a, b) => a - b)
const l2s = l2.split(' ').map(Number)

function bsearch(l1, num, left, right) {
    let r = 0;
    const mid = ~~((left + right) / 2)
    if (left > right || mid >= l1.length) {
        return 0
    }

    if (l1[mid] > num) {
        r = bsearch(l1, num, left, mid - 1)
    } else if (l1[mid] < num) {
        r = bsearch(l1, num, mid + 1, right)
    } else { return 1 }

    return r
}

for (const l2e of l2s) {
    result.push(bsearch(l1s, l2e, 0, l1s.length))
}

console.log(result.join('\n'))