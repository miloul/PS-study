function solution(array, height) {
    var answer = 0;
    for (let i=0; i<array.length;i+=1){
        if (array[i]>height){
            answer+=1
        }
    }
    return answer;
}