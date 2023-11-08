let fs = require('fs');

const inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
//const inputs = fs.readFileSync(__dirname+'/ex2.txt').toString().split('\n');

const [n, m] = inputs[0].split(' ').map(Number);
let graph = [];

for (let i = 1; i <= n; i++) {
    graph.push(inputs[i].split(''));
}

let cnt = 0;
// -
for (let i=0; i<n; i++) {
    let flag = true;
    for (let j=0; j<m; j++) {
        if (flag && graph[i][j] === '-') {
            cnt++;
            flag = false;
        }
        else if (graph[i][j] === '|') {
            flag = true;
        }
    }
}

// |
for (let i=0; i<m; i++) {
    let flag = true;
    for (let j=0; j<n; j++) {
        if (flag && graph[j][i] === '|') {
            cnt++;
            flag = false;
        }
        else if (graph[j][i] === '-') {
            flag = true;
        }
    }
}


console.log(cnt);