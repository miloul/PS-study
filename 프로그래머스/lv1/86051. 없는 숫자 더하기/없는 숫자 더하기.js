function solution(numbers) {
    var answer = 0;
    var cnt=1;
    while (cnt<=9){
        if (numbers.indexOf(cnt)==-1){
            answer+=cnt;
        }
        cnt++;
    }
    return answer;
}