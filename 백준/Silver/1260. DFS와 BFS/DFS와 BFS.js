function dfs(graph, start, dfsVisit) { //재귀
    dfsVisit[start] = true;

    dfsResult.push(start);
    for (const node of graph[start]) {
        if (!dfsVisit[node]) {
            dfs(graph, node, dfsVisit);
        }
    }
    return;
}

function bfs(graph, start) {
    const bfsVisit = new Array(n + 1).fill(false);
    const q = [];
    let bfsResult = [start];

    q.push(start);

    while (q.length) {
        const k = q.shift();
        bfsVisit[k] = true;

        for (const node of graph[k]) {
            if (!bfsVisit[node]) {
                q.push(node);
                bfsVisit[node] = true;
                bfsResult.push(node);
            }
        }
    }

    return bfsResult.join(' ');
}


let fs = require('fs');

const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//const inputs = fs.readFileSync(__dirname+'/ex2.txt').toString().split('\n');

const [n, m, v] = inputs[0].split(' ').map(Number);

let graph = [];
for (let i=1; i<=n; i++){
    graph[i] = [];
}

for (let i=1; i <= m; i++) {
    const [v1, v2] = inputs[i].split(' ').map(Number);

    graph[v1].push(v2);
    graph[v2].push(v1);
}

graph.forEach((element) => { //그래프 정렬
    element.sort((a, b) => a - b);
});

let dfsResult = [];

dfs(graph, v, []);
const bfsResult = bfs(graph, v);

console.log(dfsResult.join(' '));
console.log(bfsResult);