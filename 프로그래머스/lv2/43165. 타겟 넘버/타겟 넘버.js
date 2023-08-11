function solution(numbers, target) {
    var answer = 0;
    
    function dfs(count, num){
        if(count === numbers.length) {
            if(num === target) answer += 1;
            return;
        }
        
        dfs(count + 1, num + numbers[count])
        dfs(count + 1, num - numbers[count])
    }
    
    dfs(0, 0)
    return answer;
}