import sys
n = int(sys.stdin.readline().strip())
l1 = []
for _ in range(n):
    x, y = map(int, sys.stdin.readline().split())
    l1.append([x, y])

score = [1]*50

for i in range(n):
    for j in range(n):
        if l1[i][0]<l1[j][0]:
            if l1[i][1]<l1[j][1]:
                score[i]+=1

for i in range(n):
    print(score[i], end=' ')