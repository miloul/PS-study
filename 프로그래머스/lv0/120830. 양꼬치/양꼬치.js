function solution(n, k) {
    var answer = 0;
    r=k-Math.floor(n/10)
    answer=(12000*n)+(r*2000)
    return answer;
}