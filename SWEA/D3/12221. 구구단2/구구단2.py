
#import sys
#sys.stdin = open("input.txt", "r")

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    n,m=map(int, input().split())
    result=n*m
    if n >= 10 or m>=10:
        result=-1
    print("#", end='')
    print(test_case, result)
