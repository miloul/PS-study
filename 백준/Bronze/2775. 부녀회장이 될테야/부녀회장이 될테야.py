import sys
t=int(sys.stdin.readline().strip())
for _ in range(t):
    p=[]
    k=int(sys.stdin.readline().strip())
    n=int(sys.stdin.readline().strip())
    for i in range(k+1):
        for j in range(1, n+1):
            if i==0:
                p.append(j)
            else:
                p.append(sum(p[(i-1)*n:j+(i-1)*n:]))
    print(p[-1])