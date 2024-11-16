def solution(numbers, target):
    answer = 0
    
    def dfs(count, sum):
        if count==len(numbers):
            if sum==target:
                nonlocal answer
                answer+=1
            return
    
        dfs(count+1, sum+numbers[count])
        dfs(count+1, sum-numbers[count])
    
    dfs(0, 0)
    return answer

