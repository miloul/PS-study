let fs = require('fs');

const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//const inputs = fs.readFileSync(__dirname+'/ex2.txt').toString().split('\n');

const n = Number(inputs[0]);
let graph = [];
for (let i=1; i<=n; i++){
    graph[i] = [];
}

const m = Number(inputs[1]);

for (let i=2; i< m+2; i++) {
    const [v1, v2] = inputs[i].split(' ').map(Number);

    graph[v1].push(v2);
    graph[v2].push(v1);
}

// bfs
const visit = [];
const q = [];
q.push(1);
visit[1] = true;
let cnt = 0;

while (q.length) {
    const v = q.pop();
    
    for (const node of graph[v]) {
        if (!visit[node]) {
            q.push(node);
            visit[node] = true;
            cnt++;
        }
    }
}

console.log(cnt);