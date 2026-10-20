function solution(players, m, k) {
    var answer = 0;
    // m 명 늘어날 때마다 1대 추가 - k시간 유지
    let servers = Array(players.length).fill(0);
    for (let i=0; i<players.length; i++) {
        let need = Math.floor(players[i] / m);
        let running =0;
        // 사용 가능한 거 계산
        for (let j = Math.max(0, i - k + 1); j <= i; j++) {
            running += servers[j];
        }
        if (need > running) {
            servers[i] = need - running;
            answer += servers[i];
        }
    }
    return answer;
}