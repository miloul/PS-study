import sys #o(n*m*a)라 시간초과 남
n,m,b=map(int, sys.stdin.readline().strip().split())
l1=[list(map(int, sys.stdin.readline().split())) for _ in range(n)]

time,high=100000000000,0
for target in range(257):
    mincount, maxcount=0,0
    for i in range(n):
        for j in range(m):
            if l1[i][j]>target: #target보다 큰 거 숫자세기 (없애야할 개수)
                maxcount+=l1[i][j]-target
            else: #target보다 작은거 숫자세기 (쌓아야할 개수)
                mincount+=target-l1[i][j]

    if mincount>maxcount+b:
        continue
    if mincount+(maxcount*2)<=time: #쌓아야할거 + 없애야할거*2 <= 시간
        time=mincount+(maxcount*2) #시간갱신
        high=target

print(time, high)