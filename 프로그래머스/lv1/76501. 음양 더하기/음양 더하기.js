function solution(absolutes, signs) {
    var answer = 0;
    for (var i=0; i<absolutes.length; i++){
        if (signs[i]==true){ //1이면
            answer+=absolutes[i]
        }
        else{
            answer-=absolutes[i]
        }
    }
    return answer;
}