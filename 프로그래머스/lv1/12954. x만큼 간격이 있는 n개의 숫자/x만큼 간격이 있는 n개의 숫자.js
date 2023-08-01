function solution(x, n) {
    var answer = [];
    var cnt=0;
    var tmp=x;
    while (cnt<n){
        answer[cnt]=x;
        x+=tmp;
        cnt++;
    }
    return answer;
}