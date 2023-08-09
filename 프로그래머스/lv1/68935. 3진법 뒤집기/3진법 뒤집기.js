function solution(n) {
    var answer = parseInt(Array.from(n.toString(3)).reverse().join(''), 3);
    return answer;
}