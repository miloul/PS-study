let fs = require('fs');

const inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
//const inputs = fs.readFileSync(__dirname + '/ex2.txt').toString().split('\n');

const [m, n] = inputs.shift().split(' ').map(Number);
let tomato = [];
let queue = [];

for (let i = 0; i < n; i++) {
    let to = inputs[i].split(' ').map(Number);
    tomato.push(to);

    //익은 토마토 담기
    let idx = -1;
    while (true) {
        idx = to.indexOf(1, idx + 1);
        if (idx === -1) break;
        queue.push([i, idx]);
    }
}

let days = 0;

function bfs() {
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    let prev = 0;
    while (true) {
        let current = queue.length; //전날 익은 토마토 수
        let change = 0;
        for (let i = prev; i < current; i++) {
            const [x, y] = queue[i];
            for (let j = 0; j < 4; j++) {
                const [nx, ny] = [x + dx[j], y + dy[j]]; //상하좌우
                if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
                if (tomato[nx][ny] === 0) { //안익은 토마토면 영향받아서 익어짐
                    change = 1;
                    tomato[nx][ny] = days + 1;
                    queue.push([nx, ny]);
                }
            }
        }
        if (change === 0) { //토마토가 더이상 안바뀜
            break;
        }
        days++;
        prev = current;
    }
}

bfs();

for (let i = 0; i < n; i++) {
    if (tomato[i].includes(0)) {
        result = -1;
        break;
    }
    result = days;
}

console.log(result);