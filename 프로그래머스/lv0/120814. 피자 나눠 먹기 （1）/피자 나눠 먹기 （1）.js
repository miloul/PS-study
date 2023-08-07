function solution(n) {
    var answer = 0;
    answer+=~~(n/7)
    if (n%7!=0){
        answer+=1
    }
    return answer;
}