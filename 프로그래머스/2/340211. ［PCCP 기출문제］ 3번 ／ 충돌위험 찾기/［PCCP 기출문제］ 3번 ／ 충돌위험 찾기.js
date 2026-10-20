function solution(points, routes) {
    let answer = 0;
    let dot = new Map();

    for (let i = 0; i < routes.length; i++) {
        let [r, c] = points[routes[i][0] - 1];
        let time = 0;

        // 출발 위치도 시간 0에 기록
        let key = [time, r, c].join(" ");
        dot.set(key, (dot.get(key) || 0) + 1);

        // 방문할 다음 포인트들을 순서대로 처리
        for (let j = 1; j < routes[i].length; j++) {
            let [er, ec] = points[routes[i][j] - 1];

            // 행 좌표 먼저 이동
            while (r !== er) {
                r += r < er ? 1 : -1;
                time++;

                key = [time, r, c].join(" ");
                dot.set(key, (dot.get(key) || 0) + 1);
            }

            // 행 좌표가 같아진 후 열 좌표 이동
            while (c !== ec) {
                c += c < ec ? 1 : -1;
                time++;

                key = [time, r, c].join(" ");
                dot.set(key, (dot.get(key) || 0) + 1);
            }
        }
    }

    // 같은 시간, 같은 위치에 2대 이상의 로봇이 있으면 충돌
    for (const [key, count] of dot) {
        if (count > 1) {
            answer++;
        }
    }

    return answer;
}