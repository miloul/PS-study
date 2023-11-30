let fs = require('fs');

const inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
//const inputs = fs.readFileSync(__dirname + '/ex2.txt').toString().split('\n');

let pan = []
let call = []
let result = 0
for (let i = 0; i < 5; i++) {
    pan.push(inputs[i].split(' ').map(Number))
    call.push(inputs[i + 5].split(' ').map(Number))
}


function callnum(k) {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (k === pan[i][j]) {
                pan[i][j] = 0
            }
        }
    }
}

const isCross = visited => {
    let cnt = 0;
    if ( //왼쪽 대각선
        !visited[0][0] &&
        !visited[1][1] &&
        !visited[2][2] &&
        !visited[3][3] &&
        !visited[4][4]
    ) {
        cnt++;
    }
    if ( //오른쪽 대각선
        !visited[0][4] &&
        !visited[1][3] &&
        !visited[2][2] &&
        !visited[3][1] &&
        !visited[4][0]
    ) {
        cnt++;
    }

    return cnt;
}

const isLine = visited => {
    let cnt = 0;
    for (let i = 0; i < 5; i++) {
        if ( //가로 빙고 확인
            !visited[i][0] &&
            !visited[i][1] &&
            !visited[i][2] &&
            !visited[i][3] &&
            !visited[i][4]
        ) {
            cnt++;
        }
        if ( //세로 빙고 확인
            !visited[0][i] &&
            !visited[1][i] &&
            !visited[2][i] &&
            !visited[3][i] &&
            !visited[4][i]
        ) {
            cnt++;
        }
    }

    return cnt;
};

function isbingo(pan) {
    return isCross(pan) + isLine(pan)
}

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        callnum(call[i][j])
        if (i > 1 && isbingo(pan) >= 3) {
            result = i * 5 + j + 1
            break
        }
    }
    if (result !== 0) break
}

console.log(result)