function solution(n, w, num) {
    var answer = 0;
    let row = Math.floor((num - 1) / w);
    let col;
    if (row % 2 === 0) {
        col = (num - 1) % w;
    } else { // 거꾸로
        col = w - 1 - ((num - 1) % w);
    }
    let m = n % w; // 나머지만큼 위에 더 쌓여있음
    let totalR =  Math.ceil(n / w); // 전체 행
    for (let r = row; r < totalR; r++) {
        // 마지막 행이 아니거나 꽉찼으면
        if (r !== totalR -1 || m === 0) answer++;
        else if (r % 2 == 0) { // 마지막이 짝수 행
            if (col < m) answer++;
        } else { // 마지막 행이 홀수 - n - 나머지 > col이면?
            if (col >= w - m) answer++;
        }        
    }
    return answer;
}