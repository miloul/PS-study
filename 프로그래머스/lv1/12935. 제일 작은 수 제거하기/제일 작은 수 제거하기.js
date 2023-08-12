function solution(arr) {
    var answer = [];
    var min = Math.min(...arr);
    if (arr.length<=1){
        answer = [-1];
    }
    else{
        arr.splice(arr.indexOf(min), 1);
        answer=arr;
    }
    return answer;
}