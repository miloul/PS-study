function solution(numbers) {
    var answer = [];
    for (let i=0; i<numbers.length; i++){
        for (let j=i+1; j<numbers.length; j++){
            const k = numbers[i] + numbers[j];
            if (!(answer.includes(k))){
                answer.push(k);
            }
        }
    }
    answer.sort(function(a, b)  {
        if(a > b) return 1;
        if(a === b) return 0;
        if(a < b) return -1;
    });
    return answer;
}