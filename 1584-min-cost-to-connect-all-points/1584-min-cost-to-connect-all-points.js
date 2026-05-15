/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    let graph = [];
    // init parent node
    let parent = [];

    const getGraph = (p1, p2, i, j) => {
        let [x1, y1] = p1.map(Number);
        let [x2, y2] = p2.map(Number);
        graph.push([i, j, Math.abs(x2-x1)+Math.abs(y2-y1)]);
        
    }

    // set graph [p1, p2, length]
    for (let i=0; i< points.length -1; i++) {
        for (let j=i+1; j<points.length; j++) {
            getGraph(points[i], points[j], i, j);
        }
    }

    for (let i=0; i< points.length; i++) {
        parent.push(i);
    }
    
    // sort graph
    graph.sort((a,b) => a[2]-b[2]);

    const find = (i) => {
        if (parent[i] === i) {
            return i;
        } else {
            parent[i] = find(parent[i]);
            return parent[i];
        }
    }

    const union = (i, j) => {
        let roota = find(i);
        let rootb = find(j);

        if (roota != rootb) {
            parent[roota] = rootb;
        }
    }

    let totalCost = 0;
    let edgeCnt = 0;
    // kruskal
    for (const [v, u, cost] of graph) { // 간선 순회
        let rootv = find(v);
        let rootu = find(u);

        // if cycle exist
        if (rootv === rootu) continue;
        totalCost += cost;

        // union u and v
        union(v, u);
        edgeCnt++;
        if (edgeCnt === graph.length - 1) break;
    }

    return totalCost;
};