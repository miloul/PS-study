let fs = require('fs');

const inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
//const inputs = fs.readFileSync(__dirname+'/ex2.txt').toString().split('\n');

const n = Number(inputs[0]);
let graph = [];
for (let i=1; i<=n; i++){
    graph[i] = [];
}

for (let i=1; i< n; i++) {
    const [v1, v2] = inputs[i].split(' ').map(Number);

    graph[v1].push(v2);
    graph[v2].push(v1);
}

const relate = [];

// bfs
const visit = [];
const q = [];
let cnt = 0;

q.push(1);
visit[1] = true;

while (q.length) {
    const v = q.pop();
    
    for (const node of graph[v]) {
        if (!visit[node]) {
            q.push(node);
            visit[node] = true;
            relate[node] = v;
            cnt++;
        }
    }
}

console.log(relate.slice(2).join("\n"));