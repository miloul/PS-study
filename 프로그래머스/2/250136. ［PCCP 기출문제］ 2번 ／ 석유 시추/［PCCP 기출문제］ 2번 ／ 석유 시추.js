function solution(land) {
    var answer = 0;
    const n = land.length;
    const m = land[0].length;
    const colTotals = new Array(m).fill(0);
    const visited = Array.from(Array(n), () => Array(m).fill(false));
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
        
    for (let i=0; i< n; i++) {
        for (let j=0; j<m; j++) {
            if (!visited[i][j] && land[i][j] == 1) {
                // 방문안했고 석유 있으면 BFS
                let q = [[i,j]]
                visited[i][j] = 1;
                
                let head = 0;
                let size = 0;
                let cols = new Set();
                while (q.length > head) {
                    let [cx, cy] = q[head++];
                    cols.add(cy);
                    size++;
                    
                    for (let k=0; k< 4; k++) {
                        let nx = cx+dx[k];
                        let ny = cy+dy[k];
                        if (nx >= 0 && ny >= 0 && nx < n && ny < m && !visited[nx][ny] && land[nx][ny] == 1) {
                            visited[nx][ny] = 1;
                            q.push([nx, ny]);
                        }
                    }
                }
                for (let col of cols) {
                    colTotals[col] += size;
                }
            }
        }
    }
    answer = Math.max(...colTotals);
    return answer;
}