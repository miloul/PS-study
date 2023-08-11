function solution(brown, yellow) {
    var answer = [];
    var size = brown + yellow;
    for (let i = 2; i < size; i++){
        if (size % i != 0) continue;
        for (let j = i; j < size; j++){
            if (i * j == size && j >= i && (i-2)*(j-2) == yellow){
                answer = [j, i];
            }
        }
    }
    return answer;
}