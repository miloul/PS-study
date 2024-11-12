#import sys
#sys.stdin = open("input.txt", "r")


# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for t in range(1, 11):
    sum = 0
    n=int(input())
    l1=list(map(int, input().split()))
    
    for i in range(2, n - 2):
        maxbuild = max(l1[i - 1], l1[i - 2], l1[i + 1], l1[i + 2])
        if (maxbuild < l1[i]):
            sum += (l1[i] - maxbuild)
            
    print('#', end = '')
    print(t, sum)
