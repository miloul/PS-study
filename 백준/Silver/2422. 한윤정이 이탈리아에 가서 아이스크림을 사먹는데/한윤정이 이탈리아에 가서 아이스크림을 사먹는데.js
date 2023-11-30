let fs = require('fs');

const inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
//const inputs = fs.readFileSync(__dirname + '/ex2.txt').toString().split('\n');

const [n, m] = inputs[0].split(' ').map(Number)

let l1 = Array.from(Array(n + 1), () => Array(n + 1).fill(false))

for (let i = 0; i < m; i++) {
    const [n1, n2] = inputs[i + 1].split(' ').map(Number)
    l1[n1][n2] = true
    l1[n2][n1] = true
}

let cnt = 0;

for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
        if (l1[i][j]) continue
        for (let k = j + 1; k <= n; k++) {
            if (l1[j][k] || l1[i][k]) continue
            cnt++;
        }
    }
}

console.log(cnt)