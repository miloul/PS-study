function solution(sizes) {
    var answer = 0;
    var max_v=0, max_h=0;
    for (let i=0; i<sizes.length; i++) {
        if (sizes[i][0] < sizes[i][1]) {
            let tmp = sizes[i][0]
            sizes[i][0] = sizes[i][1]
            sizes[i][1] = tmp
        }
        if (sizes[i][0] > max_v) max_v = sizes[i][0]
        if (sizes[i][1] > max_h) max_h = sizes[i][1]
    }
    answer = max_v * max_h;
    return answer;
}