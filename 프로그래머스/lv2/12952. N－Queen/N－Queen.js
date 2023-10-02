function giveMinus(chess, k, n) {
    for (let i=k+1; i<n*n; i++) {
        if (~~(i/n) == ~~(k/n)){ //가로
            chess[i] = -1;
        }
        if (i % n == k % n) { //세로
            chess[i] = -1;
        }
        if (i == k + n + 1 || i == k + n - 1){ //대각선
            chess[i] = -1;
        }
    }
}

function queen(chess, k, n) {
    chess[k] = 1;
    giveMinus(chess, k, n);
    var cntQueen = 1;
    for (let j=n; j<n*n; j++) {
        if (chess[j] == 0){
            chess[j] = 1;
            cntQueen++;
            giveMinus(chess, j, n);
        }
    }
    if (cntQueen == n){
        return true;
    }
    else {
        return false;
    }
}

function solution(n) {
    var chess = new Array(n*n);
    var cnt = 0;
    for (let i=0; i<n; i++) {
        chess.fill(0);
        if (queen(chess, i, n)) {
            cnt++;
        }
        //console.log(chess)
    }
    return cnt;
}